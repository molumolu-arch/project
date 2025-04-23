// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  isLoading = false;
  error: string = '';
  categoryId: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId'));
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProductsByCategory(this.categoryId).subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message || 'An error occurred';
        this.isLoading = false;
      }
    });
  }

  addToOrder(productId: number): void {
    this.orderService.addItem(productId);
    alert('Product added to order!');
  }
}
