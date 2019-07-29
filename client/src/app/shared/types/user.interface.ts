export interface User {
    id?: number;
    name: string;
	email: string;
	department?: string;
	hashedPassword?: string;
	role: string;
    createdAt?: Date;
	updatedAt?: Date;
	isAdmin?: boolean;
}

export class UsersSerializer {
	fromJson(json: any): User[] {
		if (json.constructor === Array) {
			return json.map( item => {
				return {
					role: item.Department,
					email: item.EmailAddress,
					id: item.EmployeeID,
					jobRole: item.JobRole,
					name: item.Name
				}
			});
		}
	}

	toJson(jobRole: User): any {
		return {
			ID: jobRole.id,
			Name: jobRole.name
		};
	}
}


export class UserSerializer {
	fromJson(item: any): User {		
				return {
					role: item.Department,
					email: item.EmailAddress,
					id: item.EmployeeID,
					name: item.Name
				}		
	}

	toJson(jobRole: User): any {
		return {
			ID: jobRole.id,
			Name: jobRole.name
		};
	}
}