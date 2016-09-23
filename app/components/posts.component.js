System.register(['angular2/core', './services/users.service', './services/posts', 'angular2/http', './spinner'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, users_service_1, posts_1, http_1, spinner_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (posts_1_1) {
                posts_1 = posts_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (spinner_1_1) {
                spinner_1 = spinner_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _users) {
                    this._postsService = _postsService;
                    this._users = _users;
                    this.users = [];
                    this.posts = [];
                    this.show = false;
                    this.isLoading = true;
                    this.isLoadingComments = true;
                    this.isLoadingImage = true;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._users.getUsers()
                        .subscribe(function (users) { return _this.users = users; });
                    this.loadPosts();
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.isLoading = true;
                    this._postsService.getPosts(filter)
                        .subscribe(function (posts) {
                        _this.isLoading = false;
                        _this.posts = posts;
                    });
                };
                PostsComponent.prototype.select = function (post) {
                    var _this = this;
                    this.show = true;
                    this.body = post.body;
                    this.title = post.title;
                    this.isLoadingComments = true;
                    this.isLoadingImage = true;
                    this._postsService.getComments(post.id)
                        .subscribe(function (comments) {
                        _this.isLoadingComments = false;
                        _this.comments = comments;
                        // this.tag = ;
                    });
                };
                PostsComponent.prototype.onImgLoad = function () {
                    this.isLoadingImage = false;
                };
                PostsComponent.prototype.reloadPost = function (filter) {
                    this.posts = null;
                    this.loadPosts(filter);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: "/app/components/templates/posts.html",
                        directives: [spinner_1.Spinner],
                        providers: [posts_1.PostsService, http_1.HTTP_PROVIDERS, users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [posts_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map