import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginResponse } from '../../login/models/login-response.model';
import { AuthServiceImpl } from '../../services/auth.service.impl';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent implements OnInit , AfterViewInit {
  userInfo: LoginResponse | null = null;
  isLoggedIn: boolean = false;
  userName: string | null = null;

  constructor(private auth: AuthServiceImpl, private router: Router) {}
  ngAfterViewInit(): void {
    this.userName = this.auth.getUserFullNameEnglish();
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.userInfo = this.auth.getUserInfo();
    this.userName = this.auth.getUserFullNameEnglish();
  }
}
