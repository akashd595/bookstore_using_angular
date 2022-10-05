export class BookModel{
    bookId:number = 0;
    bookName:string = "";
    bookDescription:string = "";
    bookImg:string = "";
    bookPrice:number=0;
    quantity:number=0;
    authorName:string="";

    constructor(bookId:number, bookPrice:number=0, quantity:number, bookName:string, bookDescription:string, bookImg:string, authorName:string){
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookDescription = bookDescription;
        this.bookImg = bookImg;
        this.bookPrice = bookPrice;
        this.quantity = quantity;
        this.authorName = authorName;
    }
}