import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {
  items = this.orderService.getItems();
  isSubmitting = false;
  error = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private orderService: OrderService
  ) {}

  removeItem(item: any) {
    this.orderService.removeItem(item);
    this.items = this.orderService.getItems();
  }

  submitOrder() {
    if (this.items.length === 0) {
      this.error = 'Your order is empty.';
      return;
    }

    this.isSubmitting = true;
    this.http.post('http://127.0.0.1:8000/api/order/', { items: this.items }).subscribe({
      next: () => {
        alert('Order placed!');
        this.orderService.clearItems();
        this.router.navigate(['/my-orders']);
      },
      error: (err) => {
        this.error = err.error?.detail || 'Failed to place order';
        this.isSubmitting = false;
      }
    });
  }
}
