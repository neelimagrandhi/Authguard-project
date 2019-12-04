import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from 'src/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  id:any;
  data:any;
  currentuser:any;
  constructor(private route:ActivatedRoute,private service:ApiServices){
    this.route.params.subscribe(
        (res)=>{
           this.id=res.id;
            this.fetchdata()
        }
    )
}
fetchdata(){
     this.service.getuserInfo(this.id).subscribe(
        res=>{
            this.currentuser=res;
            console.log(this.currentuser)
        }
    )
}
  

}
