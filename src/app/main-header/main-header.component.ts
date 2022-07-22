import { Component, OnInit } from '@angular/core';
import { DataService } from '../DataService.service';
import { Observable } from 'rxjs';
import { apiResponse } from '../models';
// import { UserService } from '../user.service';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  cartItems:any;
  public cartItemCount = 0;
  constructor(private dataService: DataService) { }
  users$:Observable <apiResponse> =new Observable();
  getData() {
    this.dataService.data.subscribe(response => {this.cartItemCount=this.cartItemCount+response;
      console.log(response);  // you will receive the data from send+er component here.
    });
  }
  // cartpage(){
   
  //   this.userService.createcart().subscribe((data)=>{
  //     console.log(data);
  //     this.cartItems=data;
  //   }) 
  // }
  ngOnInit(): void {
    
    this.getData();
    
  }
  
}
