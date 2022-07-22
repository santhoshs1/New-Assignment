import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ShoppingCart } from './models1';
import { apiResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class CartshoppingService {

  cartItemCount = 0;
  baseURL: string;
  // baseURL2: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'https://bookcart.azurewebsites.net/api/shoppingcart/';
    // this.baseURL2 = 'https://bookcart.azurewebsites.net/api/shoppingcart/1006';
  }
  
  addBookToCart(bookId: number,userId:number) {
    return this.http.post(this.baseURL + `addToCart/${userId}/${bookId}`, {})
      .pipe(map(response => {
        return response;
      }));
  }
  // addBookToCart2(bookId: number,userId:number) {
  //   return this.http.post(this.baseURL2+`addToCart/${userId}/${bookId}`,{})
  //     .pipe(map(response => {
  //       return response;
  //     }));
  // }

  getCartItems(userId: number){
    return this.http.get(this.baseURL+userId,{})
      .pipe(map((response:any) => {
       this.cartItemCount= response.length;
        return response;
      }));
      
  }

  removeCartItems( bookId: number,userId:number) {
    return this.http.delete(this.baseURL + `${userId}/${bookId}`, {})
      .pipe(map(response => {
        return response;
      }));
  }

  deleteOneCartItem(userId: number, bookId: number) {
    // return this.http.put(this.baseURL + `${userId}/${bookId}`, {})
    //   .pipe(map(response => {
    //     return response;
    //   }));
  }

  clearCart(userId: number) {
    return this.http.delete(this.baseURL + `${userId}`, {})
      .pipe(map(response => {
        return response;
      }));
  }
}
