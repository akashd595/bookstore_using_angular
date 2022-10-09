export class CartModel{
    userId:number=0;
    bookId:Array<number>=[];
    quantity:Array<number>=[];

    constructor(userId:number, bookId:Array<number>, quantity:Array<number>){
        this.userId = userId;
        this.bookId = bookId;
        this.quantity = quantity;
    }
}