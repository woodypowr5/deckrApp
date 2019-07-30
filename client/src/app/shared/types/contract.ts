export interface Contract {
    id: number;
	name: string; 
	signed: Date;
	description?: string;
	thumbnailUrl?: string;
	instanceUrl?: string;
}

export class ContractsSerializer {
	fromJson(json: any): Contract[] {
		if (json.constructor === Array) {
			return json.map( item => {
				return {
					id: item.Id,
					name: item.Name,
					signed: item.Date,
					thumbnailUrl: item.ThumbnailURL,
					instanceUrl: item.ContentURL
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
					id: item.Id,
					name: item.Name,
					signed: item.Date,
					thumbnailUrl: item.ThumbnailURL,
					instanceUrl: item.ContentURL
				}		
	}

	toJson(jobRole: Contract): any {
		return {
			ID: jobRole.id,
			Name: jobRole.name
		};
	}
}