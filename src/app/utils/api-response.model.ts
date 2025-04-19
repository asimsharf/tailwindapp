export interface LocalizedMessage {
  arabic: string;
  english: string;
}

export interface ApiResponse<T> {
  data: T;
  message: LocalizedMessage; // ✅ fixed
  status: number;
  error?: string;
  errors?: string[];
  success: boolean;
}
