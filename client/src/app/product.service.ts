import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8000/api/products';  

  constructor(private http: HttpClient) { }

  getProductsByCategory(categoryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/category/${categoryId}/`);
  }

  getProduct(id: number) {
    return this.http.get(`${this.apiUrl}/${id}/`);
  }
 
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/`);
  }
}
