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
  product: any;
  orderService = inject(OrderService)
  error: string = '';
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(productId).subscribe({
      next: data => {
        this.product = data;
        this.isLoading = false;
      },
      error: err => {
        this.error = 'Product not found.';
        this.isLoading = false;
      }
    });
  }

  addToOrder(productId: number): void {
    this.orderService.addItem(productId);
    alert('Product added to order!');
  }
}
