import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from 'src/services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent  {

  id:any;
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