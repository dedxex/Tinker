import { Component,OnInit } from 'angular2/core';

import { UsersService } from './services/users.service';
import { PostsService } from './services/posts';
import { HTTP_PROVIDERS } from 'angular2/http';

import { Spinner } from './spinner';
@Component({
    selector : 'posts',
    templateUrl : "/app/components/templates/posts.html",
    directives : [Spinner],
    providers : [PostsService,HTTP_PROVIDERS,UsersService]
})
export class PostsComponent {
    users = [];
    constructor(private _postsService : PostsService,
                private _users : UsersService) {
    }
    posts = [];
    body;
    title;
    comments;
    show=false;
    isLoading=true;
    isLoadingComments=true;
    isLoadingImage=true;
    tag;
    ngOnInit() {
        this._users.getUsers()
        .subscribe(users => this.users =users);
        this.loadPosts();
    }
    loadPosts(filter?) {
        this.isLoading=true;
        this._postsService.getPosts(filter)
        .subscribe(posts => {
            this.isLoading=false;
            this.posts = posts;
        } );
    }
    select(post) {
        this.show=true;
        this.body= post.body;
        this.title = post.title;
        this.isLoadingComments=true;
        this.isLoadingImage=true;
        this._postsService.getComments(post.id)
        .subscribe(comments => {
            this.isLoadingComments=false;
            this.comments = comments;
            // this.tag = ;
        });
    }
    onImgLoad() {
        this.isLoadingImage=false;
    }
    reloadPost(filter) {
        this.posts=null;
        this.loadPosts(filter);
    }
}