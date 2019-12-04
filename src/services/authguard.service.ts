import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';


@Injectable({
    providedIn : "root"
})

export class Authguardservice implements CanActivate{
    
constructor( private route: Router){}
    

    canActivate(){
        if(localStorage.getItem("token")=="admin123"){
        return true
        }
        else{
        return false
        }
    }
}
