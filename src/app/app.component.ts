import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductCartComponent } from './Components/product-cart/product-cart.component';
import { ProductModel } from './models/product.model';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first_project';
}

//   removeFromCart(index: number) {
//     let findIndex = this.products.findIndex((element) => {
//       return element.id == this.cart[index].id;
//     });
//
//     this.products[findIndex].inStock += this.cart[index].quantity;
//     this.cart.splice(index, 1);
//   }
//
//   checkout() {
//     let totalPrice = this.cart.reduce(
//       (acc, product) => acc + product.price * product.quantity,
//       0,
//     );
//     alert('Total Price: ' + totalPrice);
//     this.cart = [];
//   }
//
//   protected readonly events = module;
//   protected readonly event = event;
// }
