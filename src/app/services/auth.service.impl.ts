import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthRepository } from '../repositories/auth.repository';
import { TokenUtil } from '../utils/token.util';
import { LoginResponse } from '../login/models/login-response.model';
import { ApiResponse } from '../utils/api-response.model';
import { UsersResponse } from '../home/models/users.model';

@Injectable({ providedIn: 'root' })
export class AuthServiceImpl implements AuthService {
  constructor(private repo: AuthRepository) {}
  users(): Observable<ApiResponse<LoginResponse[]>> {
    throw new Error('Method not implemented.');
  }

  login(
    email: string,
    password: string
  ): Observable<ApiResponse<LoginResponse>> {
    return this.repo.login(email, password).pipe(
      tap((res) => {
        const token = res.data?.accessToken;
        if (token) {
          TokenUtil.setToken(token);
          TokenUtil.setUserInfo(res.data);
          console.log('✅ Token stored in localStorage');
        } else {
          console.warn('⚠️ Token not found in response');
        }
      })
    );
  }

  logout(): void {
    TokenUtil.removeToken();
  }

  isLoggedIn(): boolean {
    return !!TokenUtil.getToken();
  }

  isTokenExpired(): boolean {
    return TokenUtil.isTokenExpired();
  }

  getUserInfo(): LoginResponse | null {
    return TokenUtil.getUserInfo();
  }

  getUserFullNameEnglish(): string | null {
    return TokenUtil.getUserFullNameEnglish();
  }

  getAllUsers(): Observable<ApiResponse<UsersResponse[]>> {
    return this.repo.getAllUsers();
  }
}
