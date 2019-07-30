export interface SecurityGroup {
    id: number;
    name: string;
    iconName: string;
	description?: string;
	status?: string;
}

export class SecurityGroupsSerializer {
	fromJson(json: any): SecurityGroup[] {
		if (json.constructor === Array) {
			return json.map( item => {
				return {
					id: item.Id,
					name: item.Name,
					iconName: item.IconName,
					description: item.Description
				}
			});
		}
	}
}


export class UserSecurityGroupsSerializer {
	fromJson(json: any): SecurityGroup[] {
		if (json.constructor === Array) {
			return json.map( item => {
				return {
					id: item.SecurityGroup.Id,
					name: item.SecurityGroup.Name,
					iconName: item.SecurityGroup.IconName,
					description: item.SecurityGroup.Description,
					status: item.Status
				}
			});
		}
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
}