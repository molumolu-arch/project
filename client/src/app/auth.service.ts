import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'http://localhost:8000/users';

  constructor(private http: HttpClient) {}

  register(userData: any) {
    return this.http.post(`${this.BASE_URL}/register/`, userData);
  }

  login(credentials: any) {
    return this.http.post(`${this.BASE_URL}/login/`, credentials).pipe(
      tap((res: any) => {
        localStorage.setItem('access_token', res.access);
        localStorage.setItem('refresh_token', res.refresh);
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  refreshToken(refresh: string) {
    return this.http.post('http://localhost:8000/token/refresh/', { refresh });
  }
  
}

