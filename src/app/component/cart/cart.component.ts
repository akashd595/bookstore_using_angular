import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/model/bookModel';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {


  cb:Array<any>=[];
  bc:any="";
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


  constructor(private router: Router, private route: ActivatedRoute, private bookService: BookService, private cartService: CartService) { }


  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get("Id");
    // this.getBookById(2);
    this.getBookFromCart();

    // console.log(this.cb);
    
  }

  getAllBooks() {

    this.bookService.getAllBooks().subscribe((response: any) => {

      this.allBooks = response.data;
      console.log(this.allBooks);

    });
  }
  
  gettingBooksFromBookIds(){
    console.log("+-+-+-+-+"+this.cartBooks);
    // for (let i = 0; i < cars.length; i++) {
    //   text += cars[i] + "<br>";
    // }
    for(let i=0; i < this.cartBooks.length; i++){
     this.getBookById(this.cartBooks[i]);
    }
  }
  getBookFromCart() {
    console.log("++++++++++++ get book from cart ");
    
    if (localStorage.getItem("token") != null) {
      this.token = localStorage.getItem("token");
      console.log("***************"+this.token);
      
      this.cartService.getUserCartBook(this.token).subscribe((response: any) => {
        this.cartBooks = response.data;
      console.log("Cart***************"+this.cartBooks);
      this.gettingBooksFromBookIds();
        
      });
      

    }
  }
  
  getImage(bookId: any) {
    // console.log("xasdedwe", this.Id);

    this.bookImage = this.allBooks[bookId].bookImg;
    console.log("sdwedwefew  ", this.allBooks[this.Id]);
    // console.log(this.bookImage);

  }


  getBookById(bookId: any) {
    this.bookService.getBookById(bookId).subscribe((response: any) => {
      this.bookdetail = response.data;
      // console.log(this.bookdetail);
      this.bookdetail.bookImg = this.imgStarter + response.data.bookImg;
      // console.log("this book  detail book image     "+this.bookdetail.bookImg);
      this.bookImage = this.bookdetail.bookImg;
      this.cb.push(this.bookdetail);
    });
  }

  visitCustomerDetail() {
    if (this.bookFlag == false) {
      this.bookFlag = true;
    }
  }
  orderDetail() {
    if (this.orderFlag === false) {
      this.orderFlag = true;
    }
  }
  reduceCount() {
    if (this.bookCount > 0) {
      this.bookCount = this.bookCount - 1;
    }
  }
  increaseCount() {

    this.bookCount = this.bookCount + 1;

  }
  makeCountZero() {
    this.bookCount = 0;
  }
}
