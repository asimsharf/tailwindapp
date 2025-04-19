import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { redirectGuard } from './utils/guards/redirect.guard';
import { loginGuard } from './utils/guards/login.guard';
import { authGuard } from './utils/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [redirectGuard],
    component: AuthLayoutComponent,
    children: [],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [authGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
