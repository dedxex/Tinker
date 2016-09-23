System.register(['angular2/core', 'angular2/common', './services/users.service', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, users_service_1, http_1, router_1, router_2;
    var EditUser;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            EditUser = (function () {
                function EditUser(fb, _router, _usersService, _routeParams) {
                    this._router = _router;
                    this._usersService = _usersService;
                    this._routeParams = _routeParams;
                    this.user = {};
                    this.title = "Create User";
                    this.createUserForm = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.required],
                        phone: ['', common_1.Validators.required],
                        address: fb.group({
                            street: [''],
                            suite: [''],
                            city: [''],
                            zipcode: ['']
                        })
                    });
                }
                EditUser.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.createUserForm.dirty) {
                        return confirm("are you sure");
                    }
                };
                EditUser.prototype.onSubmit = function (para) {
                    var _this = this;
                    this._usersService.addUser(this.createUserForm.value)
                        .subscribe(function (x) {
                        //this.createUserForm.markAsPristine();
                        _this._router.navigate(['Users']);
                    });
                };
                EditUser.prototype.ngOnInit = function () {
                    var _this = this;
                    this.id = this._routeParams.get("id");
                    this.title = this.id ? "Edit User" : "Create User";
                    if (!this.id) {
                        return;
                    }
                    this._usersService.editUser(this.id)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                EditUser = __decorate([
                    core_1.Component({
                        selector: 'creatf',
                        templateUrl: "/app/components/templates/createuser.html",
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS, router_2.RouteParams]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, users_service_1.UsersService, router_2.RouteParams])
                ], EditUser);
                return EditUser;
            }());
            exports_1("EditUser", EditUser);
        }
    }
});
//# sourceMappingURL=edituser.js.map