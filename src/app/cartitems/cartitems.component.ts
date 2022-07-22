// import { Component, OnInit } from '@angular/core';
// import { ShoppingCart } from 'src/app/models1';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators'
// import { CartshoppingService} from 'src/app/cartshopping.service';
// import {UsercartService} from 'src/app/usercart.service';
// import {SnackbarService} from 'src/app/snackbar.service';
// @Component({
//   selector: 'app-cartitems',
//   templateUrl: './cartitems.component.html',
//   styleUrls: ['./cartitems.component.css']
// })
// export class CartitemsComponent implements OnInit {

  
//   public cartItems: ShoppingCart[]=[];
//   userId:any;
//   totalPrice: any;
  
//   private unsubscribe$ = new Subject<void>();

//   constructor(
//     private CartShoppingService: CartshoppingService,
//     private SnackbarService: SnackbarService,
//     private usercartService: UsercartService) {
//     this.userId = localStorage.getItem('userId');
//   }
  
//   ngOnInit() {
//     this.cartItems = [];
//     this.getShoppingCartItems();
//   }

//   getShoppingCartItems() {
    
//     // this.CartShoppingService.getCartItems(this.userId)
//     //   .pipe(takeUntil(this.unsubscribe$))
//     //   .subscribe(
//     //     (result) => {
//     //       this.cartItems = result;
//     //       this.getTotalPrice();
//     //     }, error => {
//     //       console.log('Error ocurred while fetching shopping cart item : ', error);
//     //     });
//   }

//   getTotalPrice() {
//     this.totalPrice = 0;
//     this.cartItems.forEach(item => {
//       this.totalPrice += (item.book.price * item.quantity);
//     });
//   }

//   deleteCartItem(bookId: number) {
//     // this.CartShoppingService.removeCartItems(this.userId, bookId)
//     //   .pipe(takeUntil(this.unsubscribe$))
//     //   .subscribe(
//     //     result => {
//     //       this.usercartService.cartItemcount$.next(result);
//     //       this.SnackbarService.showSnackBar('Product removed from cart');
//     //       this.getShoppingCartItems();
//     //     }, error => {
//     //       console.log('Error ocurred while deleting cart item : ', error);
//     //     });
//   }

//   addToCart(bookId: number) {
//     // this.CartShoppingService.addBookToCart(bookId)
//     //   .pipe(takeUntil(this.unsubscribe$))
//     //   .subscribe(
//     //     result => {
//     //       this.usercartService.cartItemcount$.next(result);
//     //       this.SnackbarService.showSnackBar('One item added to cart');
//     //       this.getShoppingCartItems();
//     //     }, error => {
//     //       console.log('Error ocurred while addToCart data : ', error);
//     //     });
//   }

//   deleteOneCartItem(bookId: number) {
//     // this.CartShoppingService.deleteOneCartItem(this.userId, bookId)
//     //   .pipe(takeUntil(this.unsubscribe$))
//     //   .subscribe(
//     //     result => {
//     //       this.usercartService.cartItemcount$.next(result);
//     //       this.SnackbarService.showSnackBar('One item removed from cart');
//     //       this.getShoppingCartItems();
//     //     }, error => {
//     //       console.log('Error ocurred while fetching book data : ', error);
//     //     });
//   }

//   clearCart() {
    // this.CartShoppingService.clearCart(this.userId)
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe(
    //     result => {
    //       this.usercartService.cartItemcount$.next(result);
    //       this.SnackbarService.showSnackBar('Cart cleared!!!');
    //       this.getShoppingCartItems();
    //     }, error => {
    //       console.log('Error ocurred while deleting cart item : ', error);
    //     });
//   }}
