export interface LoginResponse {
  id: number;
  firstName: { arabic: string; english: string };
  middleName: { arabic: string; english: string };
  fatherName: { arabic: string; english: string };
  lastName: { arabic: string; english: string };
  email: string;
  phone: string;
  role: string;
  accessToken: string;
  expiresIn: number;
  createdAt: string;
  sincera: boolean;
}
