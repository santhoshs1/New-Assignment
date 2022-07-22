import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { DataService } from '../DataService.service';
import{apiResponse} from '../models';
import { CartshoppingService} from 'src/app/cartshopping.service';
import { SnackbarService } from '../snackbar.service';
import { UsercartService } from '../usercart.service';
@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {
  bookId:any;
  userId:any;
  users:any;
  constructor(public userservice:UserService,public snackBarService:SnackbarService,public usercartService:UsercartService, private CartShoppingService: CartshoppingService,private dataService: DataService){
    this.userId = localStorage.getItem('userId');
  }
  
  users$:Observable <apiResponse> =new Observable();
  
  ngOnInit(){
    
    this.userservice.getUsers().subscribe((data)=>{
      this.users=data;
       
      });
   
  }
  addToCart() {
    this.CartShoppingService.addBookToCart(this.bookId,this.userId).subscribe(
      result => {
      this.sendNewData(1);
        this.usercartService.cartItemcount$.next(result);
        this.snackBarService.showSnackBar('One Item added to cart');
      }, error => {
        console.log('Error ocurred while addToCart data : ', error);
      });
  }
  sendNewData(data: number) {
    this.dataService.sendData(data);
  }


  //   addToCart() {
  //   this.CartShoppingService.addBookToCart(this.bookId,this.userId).subscribe(
  //     result => {
  //       this.usercartService.cartItemcount$.next(result);
  //       this.snackBarService.showSnackBar('One Item added to cart');
  //     }, error => {
  //       console.log('Error ocurred while addToCart data : ', error);
  //     });
  // }
}