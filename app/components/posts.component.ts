import { Component,OnInit } from 'angular2/core';

import { UsersService } from './services/users.service';
import { PostsService } from './services/posts';
import { HTTP_PROVIDERS } from 'angular2/http';

import { Spinner } from './spinner';
import { Pagination } from './pagination';
@Component({
    selector : 'posts',
    templateUrl : "/app/components/templates/posts.html",
    directives : [Spinner,Pagination],
    providers : [PostsService,HTTP_PROVIDERS,UsersService]
})
export class PostsComponent {
    constructor(private _postsService : PostsService,
                     private _users : UsersService) {
    }
    users = [];
    posts = [];
    pagedPost=[];
    body;
    title;
    comments;
    show=false;
    isLoading=true;
    isLoadingComments=true;
    isLoadingImage=true;
    tag;
    pageSize=10; 

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
            this.pagedPost = this.getPostsInPage(1);
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
        //this.posts=null;
        this.loadPosts(filter);
    }
    onPageChanged(page) {
        console.log("page changed");
        this.pagedPost = this.getPostsInPage(page);
    }
    getPostsInPage(page) {
        // console.log(this.posts);
        var results = [];
        var startingIndex = (page-1) * this.pageSize;
        var EndingIndex = Math.min(startingIndex + this.pageSize,this.posts.length);

        for(var i=startingIndex; i<EndingIndex; i++) {
            results.push(this.posts[i]);
        }
            // console.log(results);
            return results;
    }
}