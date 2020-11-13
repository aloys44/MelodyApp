import { OrdersComponent } from './../orders/orders.component';
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { ProductsComponent } from './../products/products.component';
import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-ecommerce',
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {
    public collapsed = true;
    orderFinished = false;

    @ViewChild('productsC')
    productsC: ProductsComponent;

    @ViewChild('shoppingCartC')
    shoppingCartC: ShoppingCartComponent;

    @ViewChild('ordersC')
    ordersC: OrdersComponent;

    constructor() {
    }

    ngOnInit() {
    }

    finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;
    }


}