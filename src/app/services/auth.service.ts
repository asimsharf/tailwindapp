import { Observable } from 'rxjs';
import { LoginResponse } from '../login/models/login-response.model';
import { ApiResponse } from '../utils/api-response.model';

export interface AuthService {
  login(
    email: string,
    password: string
  ): Observable<ApiResponse<LoginResponse>>;
  logout(): void;
  isLoggedIn(): boolean;
  users(): Observable<ApiResponse<LoginResponse[]>>;
}
