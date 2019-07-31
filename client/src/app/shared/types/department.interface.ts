export interface Department {
	id: number;
	name: string;
}

export class DepartmentsSerializer {
	fromJson(json: any): Department[] {
		if (json.constructor === Array) {
			return json.map( item => {
				return {
					id: item.Id,
					name: item.Name
				}
			});
		}
	}
}	