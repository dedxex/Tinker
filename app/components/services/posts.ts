import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Injectable } from 'angular2/core';
@Injectable()
export class PostsService {
    constructor(private _http : Http) {
    }
    _url="https://jsonplaceholder.typicode.com/posts";
    getPosts(filter?) {
        var url = this._url;
        if(filter && filter.userId) {
            url += "?userId="+filter.userId;
        }
        return this._http.get(url)
        .map(res => res.json());
    }
    getComments(id) {
        return this._http.get(this._url+"/"+id+"/comments")
        .map(res => res.json());
    }
}