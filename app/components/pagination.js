System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Pagination;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Pagination = (function () {
                function Pagination() {
                    this.pageSize = 10;
                    this.pageChanged = new core_1.EventEmitter();
                }
                Pagination.prototype.ngOnChanges = function () {
                    this.currentPage = 1;
                    var pagesCount = this.items.length / this.pageSize;
                    // console.log(this.items.length+""+this.pageSize);
                    console.log("pages created");
                    this.pages = [];
                    for (var i = 1; i <= pagesCount; i++) {
                        this.pages.push(i);
                    }
                };
                Pagination.prototype.changePage = function (page) {
                    this.currentPage = page;
                    this.pageChanged.emit(page);
                };
                Pagination.prototype.previous = function () {
                    if (this.currentPage == 1) {
                        return;
                    }
                    this.currentPage--;
                    this.pageChanged.emit(this.currentPage);
                };
                Pagination.prototype.next = function () {
                    if (this.currentPage == this.pages.length) {
                        return;
                    }
                    this.currentPage++;
                    this.pageChanged.emit(this.currentPage);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Pagination.prototype, "items", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Pagination.prototype, "pageSize", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Pagination.prototype, "pageChanged", void 0);
                Pagination = __decorate([
                    core_1.Component({
                        selector: 'pagination',
                        templateUrl: 'app/components/templates/pagination.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Pagination);
                return Pagination;
            }());
            exports_1("Pagination", Pagination);
        }
    }
});
//# sourceMappingURL=pagination.js.map