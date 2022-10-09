import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel } from 'src/app/model/loginModel';
import { UserDataModel } from 'src/app/model/userDataModel';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inputVar:any="";
  eyeFlag:boolean = false;
  token:string="";
  constructor(private router:Router, private route:ActivatedRoute, private userService:UserDataService) { }
  akashToken:string="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb250YWN0X2lkIjo5fQ.v_IYovTZWRz4XCFGDLpu8SLTaDRGQBKOhkkN2kBRqJU";
  umeshToken:string="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb250YWN0X2lkIjoxMH0.5RnP9FXVjl67H9k-EmsgChA5HFGSMv2ENM67LQlYAEY";
  // constructor(){}

  ngOnInit(): void {

  }

  eyeClick(){
    if(this.eyeFlag == false){
      this.eyeFlag = true;
    }else{
      this.eyeFlag = false;
    }
  }

  userData:UserDataModel = new UserDataModel("", "", "", "");
  toLoginUser:LoginModel = new LoginModel("", "");
  // addUser(){
  //   this.userService.addUser(this.userData).subscribe((response:any) => {
  //     this.token = response.data;
  //   })
  //   console.log("Entered user is --->>",this.userData);
    
  // }
  signUpClick(){
    console.log("Entered user is --->>",this.userData);
    this.userService.addUser(this.userData).subscribe((response:any) => {
      this.token = response.data;
      console.log("token is --->>>",this.token);
    });
    this.router.navigate(['dashboard']);
  }

  toLogin(){
    console.log("Login--> ");
    this.userService.tologin(this.umeshToken, this.inputVar).subscribe((response:any) => {
      console.log("Login Status --> "+response.data);
    })
    this.router.navigate(['dashboard']);
  }

  toLoginUserData(loginData:any){
    this.userService.login(loginData).subscribe((response:any) => {
      console.log("response is ",response);
      localStorage.setItem("token", response.data);
      this.router.navigate(["dashboard"]);
    });
  }
  
}
