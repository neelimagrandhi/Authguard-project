import { Component, TemplateRef } from "@angular/core";
import { ApiServices } from 'src/services/api.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.scss"],
})
export class Homecomponent{
    users: any;
    modalRef: BsModalRef;
    public myform: FormGroup;
    id: any;
    currentuser: Object;
    key: Event;
    username: string;
    constructor(private service:ApiServices,private router:Router,private modalService: BsModalService,private fb:FormBuilder){
        this.myform=this.fb.group({
            username:['',Validators.required],
            email:['',Validators.required]
        })
        this.fetchusers()
        
    
}
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }
    fetchusers(){
        this.service.getuser().subscribe(
            res=>{
                this.users=res
            }
        )
        }

    
    gotoedit(data){
        this.router.navigate(["edit",data])
    }
    savedata():void{
        console.log(this.myform.value)
    }
    
}