import { TrainingStatus } from './training-status';

export interface Training {
    id: number;
    name: string; 
    dueDate: Date;
    timeToComplete: number;
    progress: number;
    description?: string;
	status: TrainingStatus;
	url?: string;
}

export class TrainingsSerializer {
	fromJson(json: any): Training[] {
		if (json.constructor === Array) {
			return json.map( item => {
				return {
					description: item.Description,
					dueDate: item.DueDate,
					timeToComplete: item.Duration,
					id: item.Id,
					name: item.Name,
					url: item.TrainingURL,
					status: TrainingStatus.notStarted,
					progress: 0
				}
			});
		}
	}

	toJson(jobRole: Training): any {
		return {
			ID: jobRole.id,
			Name: jobRole.name
		};
	}
}


export class TrainingSerializer {
	fromJson(item: any): Training {		
				return {
					description: item.Description,
					dueDate: item.DueDate,
					timeToComplete: item.Duration,
					id: item.Id,
					name: item.Name,
					url: item.TrainingURL,
					status: TrainingStatus.notStarted,
					progress: 0
				}		
	}

	toJson(jobRole: Training): any {
		return {
			ID: jobRole.id,
			Name: jobRole.name
		};
	}
}