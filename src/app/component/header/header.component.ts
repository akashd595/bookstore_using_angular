import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserDataModel } from 'src/app/model/userDataModel';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  isLogedIn:boolean =false;
  @Output() messageEvent = new EventEmitter<string>();
  message:string="logout";
  constructor(private _snackBar:MatSnackBar, private router:Router, private userService:UserDataService) { }

  userData:UserDataModel = new UserDataModel("", "", "", "");

  ngOnInit(): void {
    console.log("**Header's ngOnIt+++");
    
    this.checkingLogin();
    // console.log("User----> "+this.userData);
  }


  logout() {
    this.isLogedIn = false;
    localStorage.clear();
    this.messageEvent.emit(this.message);
    this.ngOnInit();
    this._snackBar.open("Logout Successfully","",{
      duration:3000
    });	
    window.location.reload();
    this.router.navigate(["dashboard"]);
  }


  toLogIn() {
    if(localStorage.getItem("token") == null){
      // this.isLogedIn = true;
      this.checkingLogin();
      this.ngOnInit();
      this._snackBar.open("Login Page","",{
        duration:3000
      });	
      this.router.navigate(["login"]);
      console.log("calling login from tologin(2)");

    }
  }

  token:any="";  

  checkingLogin(){
    if(localStorage.getItem("token") != null){
      this.isLogedIn = true;
      this.token = localStorage.getItem("token");
      console.log("token--> "+this.token);
      
      this.userService.getUserInfo(this.token).subscribe((response:any) =>{
        // console.log("response--->"+response)
        this.userData = response.data;
      });
    }else{
      // console.log("calling dashboard from checkoingLogin()");
      
      // // this.router.navigate(['dashboard']);
      // console.log("calling dashboard from checkoingLogin(2)");

    }
  }

  getUserData(token:string){
    this.userService.getUserInfo(token).subscribe((response:any) =>{
      console.log("response--->"+response)
      this.userData = response.data;
      console.log("User----> "+this.userData);
      
    });
  }
  cartClick(){
    if(localStorage.getItem("token") != null){
      this.router.navigate(["cart"]);
    }else{
      this.router.navigate(["please-login"]);
    }
  }
}
