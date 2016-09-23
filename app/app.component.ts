import {Component} from 'angular2/core';

import { NavBar } from './components/navbar';
import { HomeComponent } from './components/home.component';
import { PostsComponent } from './components/posts.component';
import { UsersComponent } from './components/users.component';
import { CreateUser } from './components/createuser';
import { EditUser } from './components/edituser';
import { NotFound } from './components/notfound';

import { RouteConfig,ROUTER_DIRECTIVES } from 'angular2/router';
import { RouterOutlet } from 'angular2/router';
@RouteConfig([
    {
    path : '/home',name : "Home",component : HomeComponent,useAsDefault : true
    },
    {
    path : '/users',name : "Users",component : UsersComponent
    },
    {
    path : '/notfound',name : "NotFound",component : NotFound
    },
    {
    path : '/posts',name : "Posts",component : PostsComponent
    },
    {
    path : '/users/:id',name : "EditUser",component : CreateUser
    },
    {
    path : '/delete/:id',name : "DeleteUser",component : UsersComponent
    },
    {
    path : '/users/new',name : "CreateUser",component : CreateUser
    },
    {
    path : '/*other',name : 'Other',redirectTo:['Home']
    }
])
@Component({
    selector: 'my-app',
    template: '<navbar></navbar><router-outlet></router-outlet>',
    directives : [NavBar,ROUTER_DIRECTIVES]
})
export class AppComponent {

 }