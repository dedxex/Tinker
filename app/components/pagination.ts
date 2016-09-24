import { Component,Input,Output,EventEmitter } from 'angular2/core';
@Component({
    selector : 'pagination',
    templateUrl : 'app/components/templates/pagination.html'
})
export class Pagination{
@Input() items;
@Input() pageSize=10;
@Output() pageChanged = new EventEmitter();
pages : any[];
currentPage;

ngOnChanges() {
    this.currentPage = 1;
    var pagesCount = this.items.length/this.pageSize;
    console.log(this.items.length+""+this.pageSize);
    //this function creates pages
    this.pages=[];
    for( var i=1; i<=pagesCount; i++) {
        this.pages.push(i);
    }
}
changePage(page) {
    this.currentPage=page;
    this.pageChanged.emit(page);
}
previous() {
    if(this.currentPage == 1) {
        return;
    }
    this.currentPage--;
    this.pageChanged.emit(this.currentPage);
}
next() {
    if(this.currentPage == this.pages.length) {
        return;
    }
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    
}
}