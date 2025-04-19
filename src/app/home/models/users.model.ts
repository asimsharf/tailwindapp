export interface UsersResponse {
    id: number;
    firstName: { arabic: string; english: string };
    middleName: { arabic: string; english: string };
    fatherName: { arabic: string; english: string };
    lastName: { arabic: string; english: string };
    email: string;
    phone: string;
    nin: string;
    role: string;
    createdAt: string;
    sincera: boolean;
}