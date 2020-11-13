import { ProductOrders } from './../../services/product/product-orders.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { EcommerceService } from './../../services/eCommerce/EcommerceService';
import { Product } from './../../services/product/product.model';
import { ProductOrder } from './../../services/product/product-order.model';
import { TokenStorageService } from './../../services/connectionService/token-storage.service';
import { UserService } from './../../services/connectionService/user.service';
import { EcommerceComponent } from './../../ecommerce/ecommerce/ecommerce.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";


@Component({
  selector: 'app-list-validate-order',
  templateUrl: './list-validate-order.component.html',
  styleUrls: ['./list-validate-order.component.scss']
})
export class ListValidateOrderComponent implements OnInit {
    productOrders: ProductOrder[] = [];

    products: Product[] = [];
    sub: Subscription;
    private roles: string[];
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    errorMessage = '';
    username: string;

    private shoppingCartOrders: ProductOrders;

  constructor(private ecommerceService: EcommerceService,
        private userService: UserService, 
            private tokenStorageService: TokenStorageService) {

             }

  ngOnInit() {
    this.loadValidateOrders();

                    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
        }

  }

  loadValidateOrders() {
    const user = this.tokenStorageService.getUser();
    const productNull = new Product(0,null,0,null);
    const product = new ProductOrder(productNull,0,0,0);

    this.ecommerceService.getAllActiveOrders()
     .subscribe(
                (products: any[]) => {
                    this.products = products;
                    this.products.forEach(product => {
                        this.productOrders.push(new ProductOrder(product, product.quantity, 0, user.id));
                    })
                },
                (error) => console.log(error)
            );
     console.log(this.productOrders);
         this.products = this.productOrders.productOrder.product;
              console.log(this.products);



    }



}
