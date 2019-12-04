import { Component } from '@angular/core';
import { ApiServices } from 'src/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  totalItems = 64;
  currentpage=1;
  page:number;
  data: any;
  users: Object;

  constructor(private service:ApiServices,private router:Router){
    this.fetchusers()

}
fetchusers(){
    this.service.getuser1(this.currentpage).subscribe(
        res=>{
            this.users=res
        }
    )
    }
  setpage(event:any): void{
    this.page=event.page;
    if(this.page==2){
      this.service.fetchusersinfo("_page=2&_limit=50").subscribe(
        (res)=>{
          this.users=res
        }
      )
    }
    if(this.page==3){
      this.service.fetchusersinfo("_page=3&_limit=50").subscribe(
        (res)=>{
          this.users=res
        }
      )
    }
    if(this.page==4){
      this.service.fetchusersinfo("_page=4&_limit=50").subscribe(
        (res)=>{
          this.users=res
        }
      )
    }
    if(this.page==5){
      this.service.fetchusersinfo("_page=5&_limit=50").subscribe(
        (res)=>{
          this.users=res
        }
      )
    }
    if(this.page==6){
      this.service.fetchusersinfo("_page=6&_limit=50").subscribe(
        (res)=>{
          this.users=res
        }
      )
    }
    if(this.page==7){
      this.service.fetchusersinfo("_page=7&_limit=50").subscribe(
        (res)=>{
          this.users=res
        }
      )
    }
    if(this.page==8){
      this.service.fetchusersinfo("_page=8&_limit=50").subscribe(
        (res)=>{
          this.users=res
        }
      )
    }
    if(this.page==9){
      this.service.fetchusersinfo("_page=9&_limit=50").subscribe(
        (res)=>{
          this.users=res
        }
      )
    }
    if(this.page==10){
      this.service.fetchusersinfo("_page=10&_limit=50").subscribe(
        (res)=>{
          this.users=res
        }
      )
    }
  } 
 } 

