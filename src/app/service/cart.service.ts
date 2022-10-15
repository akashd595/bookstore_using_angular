import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  baseUrl:any = "http://localhost:8080/cartController";

  // addToCart(bookId:number, token:string){
  //   return this.http.post(this.baseUrl+"/addToCart/"+ bookId+"?token="+token,{});
  // }

  addToCart(bookId:number, token:string){
    return this.http.post(this.baseUrl+"/addToCart/"+ bookId+"?token="+token,{});
  }
  
  // getUserCartBook(token:string){
  //   return this.http.get("http://localhost:8080/cartController/bookIdList/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb250YWN0X2lkIjoxM30.ESKiKiBpFNcG-1YxdY6wYcpBu1Azj2PBwx4I4qOv2Co");
  // }
  getUserCartBook(token:string){
    return this.http.get("http://localhost:8080/cartController/bookIdList/"+token);
  }
  getUserCart(token:string){
    return this.http.get("http://localhost:8080/cartController/getUserCart/"+token);
  }
  removeBookFromCart(bookId:any, token:any){
    return this.http.delete("http://localhost:8080/cartController/deleteBook/"+bookId+"?token="+token);
  }
  incrementBookQuantity(bookId:any, token:any){
    return this.http.put("http://localhost:8080/cartController/incrementBookQuantity/"+bookId+"?token="+token,{});
  }
  decrementBookQuantity(bookId:any, token:any){
    return this.http.put("http://localhost:8080/cartController/decrementBookQuantity/"+bookId+"?token="+token,{});
  }
  getCartBooks(token:any){
    return this.http.get("http://localhost:8080/cartController/getAllBookFromCart/"+token);
  }
}
