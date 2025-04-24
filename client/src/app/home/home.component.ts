import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { OrderService } from '../order.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any[] = [];
  isLoading: boolean = true;
  error: string = '';
  orderService = inject(OrderService)

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Error loading products';
        this.isLoading = false;
      }
    });
  }
  addToCart(product: any): void {
    this.orderService.addItem(product.id);
    alert(`${product.name} added to cart!`);
  }
}