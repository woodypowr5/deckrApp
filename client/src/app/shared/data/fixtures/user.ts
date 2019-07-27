import { User } from '../../types/user.interface';

export const userFixture: User =  {
	id: 1,
	name: 'Chris Woodward',
	email: 'test@test.com',
	hashedPassword: 'a',
	createdAt: new Date(),
	updatedAt: new Date(),
	role: "stuff"
}