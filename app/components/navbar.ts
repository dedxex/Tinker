import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';
@Component({
    selector : 'navbar',
    templateUrl : "/app/components/templates/navbar.html",
    directives : [RouterLink]
})
export class NavBar {
alwaysTrue=true;
isActive='home';
activated(link) {
    console.log('activated'+" "+link);
    this.isActive=link;
}
}