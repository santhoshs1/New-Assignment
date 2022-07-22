import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{apiResponse} from './models';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUsers=():Observable <apiResponse> => {
  return this.http.get<apiResponse>("https://bookcart.azurewebsites.net/api/book/");
   
  }
  // createcart():Observable<apiResponse>{
  //   return this.http.get<apiResponse>("https://bookcart.azurewebsites.net/api/shoppingcart/1006")
  // }
}
// constructor(private http:HttpClient) { }
//   getUsers=():Observable <apiResponse> => {
//     return this.http.get<apiResponse>("https://bookcart.azurewebsites.net/api/book/");
//   }
// }