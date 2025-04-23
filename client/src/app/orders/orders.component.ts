import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: any[] = [];
  isLoading = false;
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.isLoading = true;
    this.http.get<any[]>('http://127.0.0.1:8000/api/my-orders/').subscribe({
      next: (data) => {
        this.orders = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.error?.detail || 'Failed to fetch orders';
        this.isLoading = false;
      }
    });
  }
  getTotal(order: any): number {
    return order.items.reduce((sum: number, item: any) =>
      sum + item.quantity * item.product.price, 0);
  }
  
}
