import {Component, OnInit} from 'angular2/core';

import { Control,FormBuilder,ControlGroup,Validators } from 'angular2/common';

import { UsersService } from './services/users.service';

import { HTTP_PROVIDERS } from 'angular2/http';

import {CanDeactivate, Router, RouteParams} from 'angular2/router';
@Component({
    selector : 'create',
    templateUrl : "/app/components/templates/createuser.html",
    providers : [UsersService,HTTP_PROVIDERS]
})
export class CreateUser implements CanDeactivate,OnInit {
    user = { address : {} };
    title = "Create User";
    createUserForm : ControlGroup
    constructor( fb : FormBuilder,
                private _router : Router,
                private _usersService : UsersService,
                private _routeParams : RouteParams) {
        this.createUserForm=fb.group({
            name : ['',Validators.required],
            email : ['',Validators.required],
            phone : ['',Validators.required],
            address : fb.group({
                street : [''],
                suite : [''],
                city :[''],
                zipcode : ['']
            }) 

        });
    }
    routerCanDeactivate() {
        if(this.createUserForm.dirty) {
            return confirm("are you sure");
        }
    }
    onSubmit() {
        var result;
        if(!this.user) {
            result = this._usersService.updateUser(this.user);
        }
        else {
            result = this._usersService.addUser(this.createUserForm.value);        
        }
        result.subscribe( x => {
            this._router.navigate(['Users']);
        });
        
    }
    ngOnInit() {
        var id = this._routeParams.get("id");
        this.title = id ? "Edit User" : "Create User";
        if(!id) {
            return;
        }
        this._usersService.editUser(id)
        .subscribe(
            user => this.user = user,
            response => {
                if(response.status == 404){
                    this._router.navigate(['NotFound']);
                }
            });
    }
}