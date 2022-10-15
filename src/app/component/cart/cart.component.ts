import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/model/bookModel';
import { CartModel } from 'src/app/model/cartModel';
import { OrderModel } from 'src/app/model/OrderModel';
import { UserDataModel } from 'src/app/model/userDataModel';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  cb: Array<any> = [];
  bookQuantityList: Array<any> = [];
  bc: any = "";
  allBooks: Array<BookModel> = [];
  bookImage: any = "";
  bookdetail: any;
  Id: any;
  imgStarter: string = "../../../assets/bookCover/";
  bookFlag: boolean = false;
  orderFlag: boolean = false;
  bookCount: number = 0;
  cartBooks: Array<any> = [];
  token: any = "";
  cartBooksList: Array<any> = [];
  bookIds: any = 0;

  ordersDetail: OrderModel = new OrderModel(new Date(), 0, "", new CartModel(0, [], []), "", "", "", "");

  constructor(private _snackBar:MatSnackBar, private orderService: OrderService, private router: Router, private route: ActivatedRoute, private bookService: BookService, private cartService: CartService) { }

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get("Id");
    this.getCartBooksForUser()
    // this.getBookById(2);
    this.getCart();
    // this.getBookFromCart();
    // this.getAllBooks();
  }

  getAllBooks() {

    this.bookService.getAllBooks().subscribe((response: any) => {

      this.allBooks = response.data;
      console.log(this.allBooks);

    });
  }


  getBookFromCart() {
    console.log("++++++++++++ get book from cart ");

    if (localStorage.getItem("token") != null) {
      this.token = localStorage.getItem("token");
      console.log("***************" + this.token);

      this.cartService.getUserCartBook(this.token).subscribe((response: any) => {
        this.cartBooks = response.data;

        console.log("Cart***************" + this.cartBooks);

      });
    }
  }
  
  //---------------------------------------------------------------------------------------------------
  getCart() {

    if (localStorage.getItem("token") != null) {
      this.token = localStorage.getItem("token");

      this.cartService.getUserCart(this.token).subscribe((response: any) => {
        this.cartBooksList = response.data.book;      //BookIds only
        this.bookQuantityList = response.data.quantity;

        // this.gettingBooksFromBookIds();

      });
    }
  }
  gettingBooksFromBookIds() {

    for (let i = 0; i < this.cartBooksList.length; i++) {
      this.getBookById(this.cartBooksList[i]);
    }
  }
  getBookById(bookId: any) {
    console.log("Book Id ---> ", bookId);

    this.bookService.getBookById(bookId).subscribe((response: any) => {
      this.bookdetail = response.data;
      this.bookdetail.bookImg = this.imgStarter + response.data.bookImg;
      this.bookImage = this.bookdetail.bookImg;
      this.cb.push(this.bookdetail);
      console.log("------CB------", this.cb);

    });
  }
  cb2:Array<BookModel>=[];
  getCartBooksForUser(){
    if (localStorage.getItem("token") != null) {
      this.token = localStorage.getItem("token");

      this.cartService.getCartBooks(this.token).subscribe((response: any) => {
        // this.bookdetail = response.data;
        // this.bookdetail.bookImg = this.imgStarter + response.data.bookImg;
        // this.bookImage = this.bookdetail.bookImg;
        // this.cb2.push(this.bookdetail);
        // this.cb2 = response.data;
        // this.cb2
        // console.log("CB2",this.cb2);

        this.bookdetail = response.data;
      this.bookdetail.bookImg = this.imgStarter + response.data.bookImg;
      this.bookImage = this.bookdetail.bookImg;
      this.cb2 = this.bookdetail;
      console.log("------CB------", this.cb2);
         
        
      });
    }
  }

  //---------------------------------------------------------------------------------------------------

  getImage(bookId: any) {

    this.bookImage = this.allBooks[bookId].bookImg;
    console.log("sdwedwefew  ", this.allBooks[this.Id]);

  }
  removeBookFromUserCart(bookName: any) {
    console.log("Book Name/Id " + bookName);

    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");

      this.cartService.removeBookFromCart(bookName, this.token).subscribe((response: any) => {
        this.cb=[];
        this.ngOnInit();
        // window.location.reload();
      });
    }
  }



  visitCustomerDetail() {
    if (this.bookFlag == false) {
      this.bookFlag = true;
    }
  }
  orderSum: any = "";
  orderPlaceDetail(){
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");

      console.log("Before entering into the api")
      this.orderService.createOrder(this.token, this.ordersDetail).subscribe((response: any) => {
        this.orderSum = response.data;
        console.log("OrderSummary " + this.orderSum);
        this._snackBar.open("Order Placed","",{
          duration:3000
        });	
        this.router.navigate(['place-order'])
      });
    }

  }
  orderDetail() {
    if (this.orderFlag === false) {
      this.orderFlag = true;
    }
    

  }
  reduceCount(bookId: number) {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");

      console.log("Before entering into the api")
      this.cartService.decrementBookQuantity( bookId, this.token).subscribe((response: any) => {
        
        console.log("Book Quantity decrement " + response.data);
        this.cb=[];
        this.ngOnInit();
        // window.location.reload();
        
      });
    }
  }
  increaseCount(bookId: number) {

    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");

      console.log("Before entering into the api")
      this.cartService.incrementBookQuantity( bookId, this.token).subscribe((response: any) => {
        
        console.log("Book Quantity increment " + response.data);
        
        this.cb=[];
        this.ngOnInit();
        // window.location.reload();
        
      });
    }

  }
  makeCountZero(i: number) {
    this.bookQuantityList[i] = 0;
  }
}
