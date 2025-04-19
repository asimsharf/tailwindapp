import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthServiceImpl } from '../services/auth.service.impl';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isLoading: boolean = false;

  email = 'superadmin@wathiq.tech';
  password = 'password';

  constructor(
    private auth: AuthServiceImpl,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onLogin() {
    this.isLoading = true;
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        this.toastr.success(res.message.english, 'Success');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        const msg = err?.error?.message?.english || 'Login failed';
        this.toastr.error(msg, 'Error');
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onLogin();
    }
  }
  onKeydownPassword(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onLogin();
    }
  }
  onKeydownEmail(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onLogin();
    }
  }
  onKeydownEmailPassword(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onLogin();
    }
  }
}
