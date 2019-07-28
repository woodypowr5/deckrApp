export interface JobRole {
	id: number;
	name: string;
}

export class JobRoleSerializer {
	fromJson(json: any): JobRole {
		if (json.constructor === Array) {
			return json.map( item => {
				return {
					id: item.ID,
					name: item.Name
				}
			});
		}
		return {
			id: json.ID,
			name: json.Name
		}
	}
  
	toJson(jobRole: JobRole): any {
		return {
			ID: jobRole.id,
			Name: jobRole.name
		};
	}
}