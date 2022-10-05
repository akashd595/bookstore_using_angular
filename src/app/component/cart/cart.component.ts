import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/model/bookModel';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  allBooks:Array<BookModel> = [];
  bookImage:any="";
  bookdetail : any ;
  Id:any;
  imgStarter:string = "../../../assets/bookCover/";
  // ../../../assets/bookCover/component (1).png
  

  constructor(private router: Router, private route:ActivatedRoute, private bookService: BookService) { }


  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get("Id");
    // this.getAllBooks();
    // this.getImage(this.Id);
    this.getBookById(this.Id);
  }

  getAllBooks(){
    
    this.bookService.getAllBooks().subscribe((response:any) => {

    this.allBooks = response.data;
    console.log(this.allBooks);
    
  });
  }

  getImage(bookId:any){
    console.log("xasdedwe",this.Id);
    
     this.bookImage =this.allBooks[bookId].bookImg;
    console.log("sdwedwefew  ",this.allBooks[this.Id]);
    // console.log(this.bookImage);
    
  }
  
  getBookById(bookId:any){
    this.bookService.getBookById(bookId).subscribe((response:any) => {
    this.bookdetail = response.data;
    // console.log(this.bookdetail);
    this.bookdetail.bookImg = this.imgStarter+response.data.bookImg;
    // console.log("this book  detail book image     "+this.bookdetail.bookImg);
     this.bookImage = this.bookdetail.bookImg;
    
    });
  }
}
