export interface User {
    id?: number;
    name: string;
    email: string;
	hashedPassword: string;
	role: string;
    createdAt?: Date;
	updatedAt?: Date;
	isAdmin?: boolean;
}