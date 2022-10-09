import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/model/bookModel';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';

interface bookContent {
  bookId:number;
  bookImg:string;
  bookName:string;
  bookPrice:number;
  quantity:number;
  authorName:string;

}
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  bookList!:bookContent[];
  allBooks:Array<BookModel> = [];
  imgStarter:string = "../../../assets/bookCover/";
  flag:boolean = false;
  cart:Array<any>=[];
  token:any="";
  cartBooks:Array<any> = [];
  cartBookCount:any=0;
  constructor(private router: Router, private route:ActivatedRoute, private bookService: BookService, private cartService:CartService) { }

  ngOnInit(): void {
    // this.bookContentLoaded();
    this.getAllBooks();
    this.getBookFromCart();
  }

  getAllBooks(){
    // console.log();
    
    this.bookService.getAllBooks().subscribe((response:any) => {
      // this.allBooks = response;
    console.log(response);
    this.allBooks = response.data;
    
    });
  }

  addToCart(bookId:number){
    this.router.navigate(['cart',bookId]);
  }
  
  addBookToCart(bookId:number){
    if(localStorage.getItem("token") != null){
      this.token = localStorage.getItem("token");
      this.cartService.addToCart(bookId, this.token).subscribe((response:any) => {
        console.log("++++++++++++++++");
        this.getBookFromCart();
      });
    }
  }

  getBookFromCart(){
    if(localStorage.getItem("token") != null){
      this.token = localStorage.getItem("token");
      this.cartService.getUserCartBook(this.token).subscribe((response:any) => {
        this.cartBooks = response.data;
        this.cartBookCount = this.cartBooks.length;
      });
    }
  }


  addToWishList(){
    // if(this.flag === true){
    //     this.flag=false;
    // } else{
    //   this.flag=true;
    // }
    // console.log(" The flag is "+this.flag);
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Price: Low to High'},
    {value: 'pizza-1', viewValue: 'Price: High to Low'},
    {value: 'tacos-2', viewValue: 'Newest arrival'},
  ];
  bookContentLoaded(){
    this.bookList = [
      {
        bookId:1,
        bookImg:this.imgStarter+"component (1).png",
        bookName:"React Material cookbook",
        bookPrice:250,
        quantity:20,
        authorName:"Adam Boduch"
      },
      {
        bookId:2,
        bookImg:this.imgStarter+"component (2).png",
        bookName:"yy",
        bookPrice:100,
        quantity:20,
        authorName:"yy"
      },
      {
        bookId:3,
        bookImg:this.imgStarter+"component (2).png",
        bookName:"yy",
        bookPrice:100,
        quantity:20,
        authorName:"yy"
      },
      {
        bookId:4,
        bookImg:this.imgStarter+"component (2).png",
        bookName:"yy",
        bookPrice:100,
        quantity:20,
        authorName:"Badal"
      },
      {
        bookId:5,
        bookImg:this.imgStarter+"component (2).png",
        bookName:"yy",
        bookPrice:100,
        quantity:20,
        authorName:"yy"
      },
      {
        bookId:6,
        bookImg:this.imgStarter+"component (2).png",
        bookName:"yy",
        bookPrice:100,
        quantity:20,
        authorName:"yy"
      },
      {
        bookId:7,
        bookImg:this.imgStarter+"component (2).png",
        bookName:"yy",
        bookPrice:100,
        quantity:20,
        authorName:"yy"
      }
    ]
  }
  
}
