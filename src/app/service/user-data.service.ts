import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }
  baseUrl:any = "http://localhost:8080/userController";

  addUser(userData:any){
    return this.http.post(this.baseUrl+"/addUserToDB",userData);
  }

  tologin(token:string, password:string){
    return this.http.post(this.baseUrl+"/tologin/"+ password+"?token="+token,{});
  }
  login(loginData:any){
    return this.http.post(this.baseUrl+"/toLoginUser/",loginData);
  }
  
}
