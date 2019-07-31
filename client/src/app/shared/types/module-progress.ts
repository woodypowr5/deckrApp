export interface ModuleProgress {
	completedTime: number;
	moduleID: number;
	moduleName: string;
	totalTime: number;
}

export class ModuleProgressSerializer {
	fromJson(json: any): ModuleProgress[] {
		if (json.constructor === Array) {
			return json.map( item => {
				console.log(json)
				return {
					completedTime: item.CompletedTime,
					moduleID: item.ModuleID,
					moduleName: item.ModuleName,
					totalTime: item.TotalTime
				}
			});
		}
	}
}
