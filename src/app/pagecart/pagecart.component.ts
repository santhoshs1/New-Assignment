import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { DataService } from '../DataService.service';
import{apiResponse} from '../models';
import { CartshoppingService} from 'src/app/cartshopping.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { ShoppingCart } from 'src/app/models1';
import {UsercartService} from 'src/app/usercart.service';
import {SnackbarService} from 'src/app/snackbar.service';
@Component({
  selector: 'app-pagecart',
  templateUrl: './pagecart.component.html',
  styleUrls: ['./pagecart.component.css']
})
export class PagecartComponent implements OnInit {

  users:any;
  userId:any;
  bookId:any;
  totalPrice:any;
  private unsubscribe$ = new Subject<void>();
  constructor(public userservice:UserService,
    private SnackbarService: SnackbarService,
    private usercartService: UsercartService ,
    private CartShoppingService: CartshoppingService,
    private dataService: DataService){}
  users$:Observable <apiResponse> =new Observable();
  
  ngOnInit(){
   
    this.userservice.getUsers().subscribe((data)=>{
      this.users=data;
      
    });
    this.users = []; 
    this.getShoppingCartItems(); 
  }
  getShoppingCartItems() {
    this.CartShoppingService.getCartItems(this.userId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (result) => {
          this.users = result;
          this.getTotalPrice();
        }, error => {
          console.log('Error ocurred while fetching shopping cart item : ', error);
        });
  }
  getTotalPrice() {
        this.totalPrice = 0;
        this.users.forEach((user:any) => {
          this.totalPrice += (user.price * user.quantity);
        });
  }
 
  deleteCartItem(bookId:number) {
    this.CartShoppingService.removeCartItems(this.userId,bookId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        result => {
          this.usercartService.cartItemcount$.next(result);
          this.SnackbarService.showSnackBar('Product removed from cart');
          this.getShoppingCartItems();
        }, error => {
          console.log('Error ocurred while deleting cart item : ', error);
        });
  }
  // addToCart(bookId: number) {
  //   this.CartShoppingService.addBookToCart( bookId)
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe(
  //       result => {
  //         this.usercartService.cartItemcount$.next(result);
  //         this.SnackbarService.showSnackBar('One item added to cart');
  //         this.getShoppingCartItems();
  //       }, error => {
  //         console.log('Error ocurred while addToCart data : ', error);
  //       });
  // }
  // deleteOneCartItem(bookId: number) {
  //   this.CartShoppingService.deleteOneCartItem(this.userId, bookId)
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe(
  //       result => {
  //         this.usercartService.cartItemcount$.next(result);
  //         this.SnackbarService.showSnackBar('One item removed from cart');
  //         this.getShoppingCartItems();
  //       }, error => {
  //         console.log('Error ocurred while fetching book data : ', error);
  //       });
  // } 
  clearCart() {
    this.CartShoppingService.clearCart(this.userId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        result => {
          this.usercartService.cartItemcount$.next(result);
          this.SnackbarService.showSnackBar('Cart cleared!!!');
          this.getShoppingCartItems();
        }, error => {
          console.log('Error ocurred while deleting cart item : ', error);
        });
  } 
}
  
