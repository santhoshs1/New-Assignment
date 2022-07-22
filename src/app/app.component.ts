import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import{apiResponse} from './models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  // users:any;
  // constructor(public userservice:UserService){}
  
  // users$:Observable <apiResponse> =new Observable();
  
  ngOnInit(){
    
    // this.userservice.getUsers().subscribe((data)=>{
    //   this.users=data;
       
    //   });
   
  }
  
}
