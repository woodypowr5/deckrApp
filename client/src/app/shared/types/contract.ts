export interface Contract {
    id: number;
	name: string; 
	signed: boolean;
	description?: string;
	thumbnailUrl?: string;
	instanceUrl?: string;
}

export class ContractsSerializer {
	fromJson(json: any): Contract[] {
		console.log(json);
		if (json.constructor === Array) {
			return json.map( item => {
				return {
					id: item,
					name: item,
					signed: item,
					description: item,
					thumbnailUrl: item,
					instanceUrl: item
				}
			});
		}
	}

	toJson(jobRole: Contract): any {
		return {
			ID: jobRole.id,
			Name: jobRole.name
		};
	}
}

export class ContractSerializer {
	fromJson(item: any): Contract {		
				return {
					id: item,
					name: item,
					signed: item,
					description: item,
					thumbnailUrl: item,
					instanceUrl: item
				}		
	}

	toJson(jobRole: Contract): any {
		return {
			ID: jobRole.id,
			Name: jobRole.name
		};
	}
}