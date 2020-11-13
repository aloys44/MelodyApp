import { OrdersComponent } from './../../ecommerce/orders/orders.component';
import { ShoppingCartComponent } from './../../ecommerce/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './../../ecommerce/products/products.component';
import { TokenStorageService } from './../../services/connectionService/token-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
      public collapsed = true;
      orderFinished = false;
      private roles: string[];
      isLoggedIn = false;
      showAdminBoard = false;
      showModeratorBoard = false;
      username: string;

      @ViewChild('productsC')
      productsC: ProductsComponent;

      @ViewChild('shoppingCartC')
      shoppingCartC: ShoppingCartComponent;

      @ViewChild('ordersC')
      ordersC: OrdersComponent;




  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();


    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;


    }

  }
        logout(): void {
      this.tokenStorageService.signOut();
      window.location.reload();
  }
  


        reset() {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
    }

        toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

}
