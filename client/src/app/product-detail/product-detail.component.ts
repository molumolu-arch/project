import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { OrderService } from '../order.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any = null;
  orderService = inject(OrderService)
  error: string | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.loadProduct(Number(productId));
    }
  }

  loadProduct(id: number) {
    this.isLoading = true;
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        this.product = product;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load product';
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
