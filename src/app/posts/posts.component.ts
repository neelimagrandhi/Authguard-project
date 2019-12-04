import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  oneAtATime:boolean=true;
  users: Object;
  constructor(private service:ApiServices,private router:Router){
    this.fetchusers()

}
fetchusers(){
    this.service.getuser().subscribe(
        res=>{
            this.users=res
        }
    )
    }

}
