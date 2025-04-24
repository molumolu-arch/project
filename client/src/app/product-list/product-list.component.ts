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
  isLoading = true;
  error: string | null = null;
  categoryId: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.categoryId = categoryId ? Number(categoryId) : 0;
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

  addToCart(product: any): void {
    this.orderService.addItem(product.id);
    alert(`${product.name} added to cart!`);
  }
  
}
