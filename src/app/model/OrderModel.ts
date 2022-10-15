import { CartModel } from "./cartModel";
import { UserDataModel } from "./userDataModel";

export class OrderModel {

    date:Date=new Date();
    totalPrice: number = 0;
    address: string = "";
    cart:any ="";
    phoneNumber: string = "";
    city: string = "";
    state: string = "";
    pincode: string = "";

    constructor(
        date:Date,
        totalPrice: number,
        address: string,
        cart: CartModel,
        phoneNumber: string,
        city: string,
        state: string,
        pincode: string

    ) {
        this.date=new Date();
        this.totalPrice=totalPrice;
        this.address=address;
        this.cart=cart;
        this.phoneNumber=phoneNumber;
        this.city=city;
        this.state=state;
        this.pincode=pincode;
    }
}