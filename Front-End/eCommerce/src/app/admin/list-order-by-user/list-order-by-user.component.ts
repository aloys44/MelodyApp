import { TokenStorageService } from './../../services/connectionService/token-storage.service';
import { UserService } from './../../services/connectionService/user.service';
import { EcommerceService } from './../../services/eCommerce/EcommerceService';
import { Subscription } from 'rxjs/internal/Subscription';
import { Product } from './../../services/product/product.model';
import { ProductOrder } from './../../services/product/product-order.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-order-by-user',
  templateUrl: './list-order-by-user.component.html',
  styleUrls: ['./list-order-by-user.component.scss']
})
export class ListOrderByUserComponent implements OnInit {
productOrders: ProductOrder[] = [];
    products: Product[] = [];
    sub: Subscription;
    private roles: string[];
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    errorMessage = '';
    username: string;

  constructor(private ecommerceService: EcommerceService,
        private userService: UserService, 
            private tokenStorageService: TokenStorageService) {

             }

  ngOnInit() {
    this.loadUserOrders();

                    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
        }

  }

  loadUserOrders() {
    const user = this.tokenStorageService.getUser();
    this.ecommerceService.getAllUserOrders(1)
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

    }


}
