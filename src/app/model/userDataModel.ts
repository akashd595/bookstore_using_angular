export class UserDataModel{
    fullName:string="";
    phoneNumber:string="";
    email:string="";
    password:string="";
    
    constructor(fullName:string, phoneNumber:string, emailId:string, password:string){
        this.fullName = fullName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = emailId;
    }
}