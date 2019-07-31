export interface UserProgress {
	completedTime: number;
	employeeID: number;
	name: string;
	totalTime: number;
	percentComplete?: number;
}

export class UserProgressSerializer {
	fromJson(json: any): UserProgress[] {
		if (json.constructor === Array) {
			return json.map( item => {
				return {
					completedTime: item.CompletedTime,
					employeeID: item.EmployeeID,
					name: item.Name,
					totalTime: item.TotalTime,
					percentComplete: Math.round(item.CompletedTime / item.TotalTime * 100) 
				}
			});
		}
	}
}	
