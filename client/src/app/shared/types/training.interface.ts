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
					description: item.Training.Description,
					dueDate: item.Training.DueDate,
					timeToComplete: item.Training.Duration,
					id: item.Training.Id,
					name: item.Training.Name,
					url: item.Training.TrainingURL,
					status: item.Status,
					progress: item.Progress
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
					description: item.Training.Description,
					dueDate: item.Training.DueDate,
					timeToComplete: item.Training.Duration,
					id: item.Training.Id,
					name: item.Training.Name,
					url: item.Training.TrainingURL,
					status: item.Status,
					progress: item.Progress
				}		
	}

	toJson(jobRole: Training): any {
		return {
			ID: jobRole.id,
			Name: jobRole.name
		};
	}
}