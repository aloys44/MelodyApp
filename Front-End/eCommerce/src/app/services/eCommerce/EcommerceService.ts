import { ProductOrders } from './../product/product-orders.model';
import { ProductOrder } from './../product/product-order.model';
import {Subject} from "rxjs/internal/Subject";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import { Observable } from 'rxjs';


@Injectable()
export class EcommerceService {
    private productsUrl = "/api/products";
    private ordersUrl = "/api/auth/orders";

    private productOrder: ProductOrder;
    private orders: ProductOrders = new ProductOrders();

    private productOrderSubject = new Subject();
    private ordersSubject = new Subject();
    private totalSubject = new Subject();

    private total: number;

    ProductOrderChanged = this.productOrderSubject.asObservable();
    OrdersChanged = this.ordersSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();

      private baseUrl = 'http://localhost:9090/api/auth';
      private baseUrlOrder = 'http://localhost:9090/api/auth/orders';


    constructor(private http: HttpClient) {
    
    }
    getAllActiveOrders() {
        return this.http.get(`${this.baseUrlOrder}`+"/getAllOrders");
    }
    getAllUserOrders(id: number): Observable<any>  {
        return this.http.get(`${this.baseUrlOrder}+"/getListUserOrder/"${id}`);
    }

    getAllProducts() {
        return this.http.get(`${this.baseUrl}`+"/products");
    }

    saveOrder(order: ProductOrders) {
        return this.http.post(`${this.baseUrlOrder}`, order);
    }

    set SelectedProductOrder(value: ProductOrder) {
        this.productOrder = value;
        this.productOrderSubject.next();
    }

    get SelectedProductOrder() {
        return this.productOrder;
    }

    set ProductOrders(value: ProductOrders) {
        this.orders = value;
        this.ordersSubject.next();
    }

    get ProductOrders() {
        return this.orders;
    }

    get Total() {
        return this.total;
    }

    set Total(value: number) {
        this.total = value;
        this.totalSubject.next();
    }
}