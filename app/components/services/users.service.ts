import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Injectable } from 'angular2/core';
@Injectable()
export class UsersService{
    constructor(private _http : Http) {
    }
    
    _url = "https://jsonplaceholder.typicode.com/users";
    getUsers() {
        return this._http.get(this._url)
                .map(res => res.json());
    }
    addUser(value) {
        return this._http.post(this._url,JSON.stringify(value))
        .map(res => res.json());
    }
    editUser(id) {
        return this._http.get(`${this._url}/${id}`)
        .map(res => res.json());
    }
    updateUser(value) {
            return this._http.put(this._url+"/"+value.id,JSON.stringify(value))
        .map(res => res.json());
    }
    deleteUser(id) {
        return this._http.delete(this._url+"/"+id)
        .map(res => res.json());
    }
}