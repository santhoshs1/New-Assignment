// import { Component, OnInit,Input } from '@angular/core';
// import { CartshoppingService} from 'src/app/cartshopping.service';
// import {UsercartService} from 'src/app/usercart.service';
// import {SnackbarService} from 'src/app/snackbar.service';

// @Component({
//   selector: 'app-addtocart',
//   templateUrl: './addtocart.component.html',
//   styleUrls: ['./addtocart.component.css']
// })
// export class AddtocartComponent  {

//   @Input('bookId') bookId:any;

//   userId:any;

//   constructor(
//     private CartShoppingService: CartshoppingService,
//     private usercartService: UsercartService,
//     private snackBarService: SnackbarService) {
//     this.userId = localStorage.getItem('userId');
//   }

//   addToCart() {
//     this.CartShoppingService.addBookToCart(this.bookId).subscribe(
//       result => {
//         this.usercartService.cartItemcount$.next(result);
//         this.snackBarService.showSnackBar('One Item added to cart');
//       }, error => {
//         console.log('Error ocurred while addToCart data : ', error);
//       });
//   }

// }