import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  componentName = 'Cart Component';
  btnDisabled = true;
  isLogin = false;
  userName = '';
  password = '';
  item = '';
  cart: any = [];
  bg = 'gray';

  constructor() {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 2000);
  }

  // getItem(e: any) {
  //   this.item = e.target.value;
  // }

  addToCart() {
    this.cart.push(this.item);
    this.item = '';
  }

  getUserName(e: any) {
    this.userName = e.target.value;
  }
  getPassword(e: any) {
    this.password = e.target.value;
  }

  login() {
    this.isLogin = true;
  }

  logout() {
    this.isLogin = false;
    this.userName = '';
    this.password = '';
  }
}
