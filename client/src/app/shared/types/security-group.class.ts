export interface SecurityGroup {
    id: number;
    name: string;
    iconName: string;
    description?: string;
}

export class SecurityGroupsSerializer {
	fromJson(json: any): SecurityGroup[] {
		if (json.constructor === Array) {
			return json.map( item => {
				return {
					id: item,
					name: item,
					iconName: item,
					description: item
				}
			});
		}
	}

	toJson(jobRole: SecurityGroup): any {
		return {
			ID: jobRole.id,
			Name: jobRole.name
		};
	}
}

export class SecurityGroupSerializer {
	fromJson(item: any): SecurityGroup {		
		return {
			id: item,
			name: item,
			iconName: item,
			description: item
		}		
	}

	toJson(jobRole: SecurityGroup): any {
		return {
			ID: jobRole.id,
			Name: jobRole.name
		};
	}
}