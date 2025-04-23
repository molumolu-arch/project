import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.isLoading = true;
    this.error = null;
    this.http.get<any[]>('http://localhost:8000/api/categories/') 
      .subscribe({
        next: (data) => {
          this.categories = data;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Failed to load categories';
          this.isLoading = false;
        }
      });
  }
}
