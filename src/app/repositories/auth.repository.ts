import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../login/models/login-response.model';
import { ApiResponse } from '../utils/api-response.model';
import { UsersResponse } from '../home/models/users.model';

@Injectable({ providedIn: 'root' })
export class AuthRepository {

  
  private baseUrl = 'https://api.wathiq.tech/api/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(
      `${this.baseUrl}users/login`,
      {
        email,
        password,
      }
    );
  }

  getAllUsers(): Observable<ApiResponse<UsersResponse[]>> {
    return this.http.get<ApiResponse<UsersResponse[]>>(`${this.baseUrl}users?page=0&size=1000`);
  }
}
