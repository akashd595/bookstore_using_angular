import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  baseUrl:any = "http://localhost:8080/orderController/";

  createOrder(token:string, orderDetail:any){
    return this.http.post(this.baseUrl+"createOrderForUser/"+token,orderDetail);
    
  }

}
