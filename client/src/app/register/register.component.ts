import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    this.auth.register({
      username: this.username,
      password: this.password,
      email: this.email
    }).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => alert(err.error.error || 'Registration failed')
    });
  }
}
