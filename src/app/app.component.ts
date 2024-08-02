import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first_project';

  products = [
    {
      id: 1,
      name: 'Nike Air Max Dn Premium Electric Shoes',
      price: 5279000,
      inStock: 10,
      image: 'assets/air-max-dn-electric-shoes-3pwX55.jfif',
    },
    {
      id: 2,
      name: 'Nike Pegasus 41 Electric Road Running Shoes',
      price: 4109000,
      inStock: 5,
      image: 'assets/pegasus-41-electric-road-running-shoes-CNd0pW.jfif',
    },
    {
      id: 3,
      name: 'Nike Vaporfly 3 Electric Road Racing Shoes',
      price: 6919000,
      inStock: 7,
      image: 'assets/vaporfly-3-electric-road-racing-shoes-ZR5Glm.jfif',
    },
  ];

  cart: any[] = [];

  addToCart(index: number) {
    let findIndex = this.cart.findIndex((element) => {
      return element.id == this.products[index].id;
    }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
    if (findIndex != -1) {// Nếu tồn tại (index != -1)
      this.cart[findIndex].quantity += 1;
      if (this.products[index].inStock <= 0) {
        return;
      } else {
        this.products[index].inStock--;
      } // Tăng số lượng lên 1
    } else {// Nếu không tồn tại
      this.cart.push({// Thêm sp mới đó vào
        image: this.products[index].image,
        id: this.products[index].id,
        name: this.products[index].name,
        price: this.products[index].price,
        quantity: 1,
      });
      this.products[index].inStock--;
    }
    console.log(this.cart);

  }

  removeFromCart(index: number) {
    let findIndex = this.products.findIndex((element) => {
      return element.id == this.cart[index].id;
    });

    this.products[findIndex].inStock += this.cart[index].quantity;
    this.cart.splice(index, 1);
  }

  checkout() {
    let totalPrice = this.cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    alert('Total Price: ' + totalPrice);
    this.cart = [];
  }
}
