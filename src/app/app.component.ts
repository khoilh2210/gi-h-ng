import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductCartComponent } from './Components/product-cart/product-cart.component';
import { ProductModel } from './models/product.model';
import { StoreService } from './services/store.service';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgFor,
    NgIf,
    NavbarComponent,
    ProductCartComponent,
    CartComponent,
    CheckoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first_project';
  constructor(public storeService: StoreService) {}
}

//
