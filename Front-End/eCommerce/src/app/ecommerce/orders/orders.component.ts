import { TokenStorageService } from './../../services/connectionService/token-storage.service';
import { EcommerceService } from './../../services/eCommerce/EcommerceService';
import {Component, OnInit} from '@angular/core';
import { ProductOrders } from './../../services/product/product-orders.model';
import {Subscription} from "rxjs/internal/Subscription";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
    orders: ProductOrders;
    total: number;
    paid: boolean;
    sub: Subscription;
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private ecommerceService: EcommerceService,
     private tokenStorage: TokenStorageService) {
        this.orders = this.ecommerceService.ProductOrders;
    }

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
           }
        this.paid = false;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.orders = this.ecommerceService.ProductOrders;
        });
        this.loadTotal();
    }

    pay() {
        this.paid = true;
        this.ecommerceService.saveOrder(this.orders).subscribe();
    }

    loadTotal() {
        this.sub = this.ecommerceService.TotalChanged.subscribe(() => {
            this.orders = this.ecommerceService.ProductOrders;
            this.total = this.ecommerceService.Total;
            
        });
    }
}