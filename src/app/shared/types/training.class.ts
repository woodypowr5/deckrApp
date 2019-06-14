export enum TrainingStatus {
    notStarted = 'not started',
    inProgress = 'in proress',
    complete = 'complete'
}

export class Training {
    private id: number;
    private name: string; 
    private dueDate: Date;
    private timeToComplete: number;
    private progress: number;
    private description?: string;
    private status: TrainingStatus;

    constructor() {
        this.progress = 0;
        this.status = TrainingStatus.notStarted;
    }
}