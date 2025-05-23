import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private items: { product_id: number, quantity: number }[] = [];

  getItems() {
    return this.items;
  }

  addItem(product_id: number) {
    const item = this.items.find(i => i.product_id === product_id);
    if (item) {
      item.quantity += 1;
    } else {
      this.items.push({ product_id, quantity: 1 });
    }
  }

  removeItem(item: { product_id: number, quantity: number }) {
    const index = this.items.findIndex(i => i.product_id === item.product_id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  clearItems() {
    this.items = [];
  }
}
