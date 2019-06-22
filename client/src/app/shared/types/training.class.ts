import { TrainingStatus } from './training-status';

export class Training {
    id: number;
    name: string; 
    dueDate: Date;
    timeToComplete: number;
    progress: number;
    description?: string;
    status: TrainingStatus;

    constructor() {
        this.progress = 0;
        this.status = TrainingStatus.notStarted;
    }
}