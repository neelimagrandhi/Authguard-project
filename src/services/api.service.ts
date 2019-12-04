import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

export class ApiServices{
    userdata: any;
  
    constructor( private http : HttpClient){}
    getuser(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }
    getuserInfo(id: any){
        return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
    }
    getuser1(currentpage){
        return this.http.get("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=50")
    }
    fetchusersinfo(data){
        return this.http.get("https://jsonplaceholder.typicode.com/comments?"+data)
    }
}