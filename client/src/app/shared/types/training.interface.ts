import { TrainingStatus } from './training-status';

export interface Training {
    id: number;
    name: string; 
    dueDate: Date;
    timeToComplete: number;
    progress: number;
    description?: string;
    status: TrainingStatus;
}
