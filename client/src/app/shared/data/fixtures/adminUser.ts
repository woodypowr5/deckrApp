import { User } from '../../types/user.interface';

export const adminUserFixture: User = {
	id: 1,
	name: 'Admin',
	email: 'test@test.com',
	hashedPassword: 'a',
	salt: 'a',
	createdAt: new Date(),
	updatedAt: new Date(),
	isAdmin: true
}