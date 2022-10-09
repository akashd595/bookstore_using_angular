import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  baseUrl:any = "http://localhost:8080/BookController";

  addBook(book:any){
    return this.http.post(this.baseUrl+"/addBook",book);
  }

  getAllBooks(){
    return this.http.get("http://localhost:8080/BookController/getAllBook");
  }
  getBookById(Id:any){
    return this.http.get(this.baseUrl+"/getBookByID/"+Id);
  }

}
