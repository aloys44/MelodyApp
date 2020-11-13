import {Product} from "./product.model";

export class ProductOrder {
    product: Product;
    quantity: number;
    user: number;
    totalPrice: number


    constructor(product: Product, quantity: number, totalPrice:number, user:number) {
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.user = user;


    }
}