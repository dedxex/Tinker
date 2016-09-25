import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';

import { HTTP_PROVIDERS } from 'angular2/http';

import { RouterLink } from 'angular2/router';

import { UsersService } from './services/users.service';
@Component({
    selector : 'users',
    templateUrl : "/app/components/templates/users.html",
    directives : [RouterLink],
    providers : [UsersService,HTTP_PROVIDERS]
})
export class UsersComponent {
    constructor(private _usersService : UsersService){
    }
    users : any[];
    numbers=0;
    listOfUsers;
    isLoading=true;
    ngOnInit() {
        this._usersService.getUsers()
        .subscribe(users => {
            this.isLoading=false;
            this.listOfUsers = users;
            });
    }
    deleteUser(user){
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.listOfUsers.indexOf(user);
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.listOfUsers.splice(index, 1);
			this._usersService.deleteUser(user.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.users.splice(index, 0, user);
					});
            console.log(user.name+" deleted");
		}
}
}