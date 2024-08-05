import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  products: ProductModel[] = [
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
  total: number = 0;
  cart: any[] = [];

  // checkout: any[] = [];

  addToCart(item: any) {
    let findIndex = this.cart.findIndex((element) => element.id == item.id); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
    let productIndex = this.products.findIndex(
      (element) => element.id == item.id,
    );
    if (findIndex != -1) {
      // Nếu tồn tại (index != -1)
      this.cart[findIndex].quantity++;
      if (this.products[findIndex].inStock == 0) {
        return;
      } else {
        this.products[findIndex].inStock--;
      } // Tăng số lượng lên 1
    } else {
      // Nếu không tồn tại
      this.cart.push(
        // Thêm sp mới đó vào
        item,
      );
      this.products[productIndex].inStock--;
    }
    console.log(this.cart);
  }

  deleteCart(product: ProductModel) {
    let findIndex = this.cart.findIndex((element) => element.id == product.id);
    let productIndex = this.products.findIndex(
      (element) => element.id == product.id,
    );
    if (findIndex != -1) {
      if (this.cart[findIndex].quantity > 1) {
        this.cart[findIndex].quantity--;
      } else {
        this.cart.splice(findIndex, 1);
      }
      this.products[productIndex].inStock++;
    }
    console.log(this.cart);
  }

  totalCost(): number {
    this.total = 0;
    for (let prod of this.cart) {
      this.total += prod.price * prod.quantity;
    }
    return this.total;
  }
}

//fix there

// checkoutCart() {
//   this.checkout = [...this.cart];
//   this.cart = [];
//   console.log('Checkout complete: ', this.checkout);
// }
// }
