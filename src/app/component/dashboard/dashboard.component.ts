import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/model/bookModel';
import { BookService } from 'src/app/service/book.service';

interface bookContent {
  bookId:number;
  bookImg:string;
  bookName:string;
  bookPrice:number;
  quantity:number;
  authorName:string;

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
  constructor(private router: Router, private route:ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    // this.bookContentLoaded();
    this.getAllBooks();
    
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
