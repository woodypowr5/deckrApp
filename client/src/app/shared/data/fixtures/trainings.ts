import { Training } from '../../types/training.interface';
import { TrainingStatus } from '../../types/training-status';

export const trainingsFixture: Training[] = [
	{
		id: 1,
		name: 'Welcome to the Team',
		dueDate: new Date(),
		timeToComplete: 1,
		progress: 0,
		description: '',
		status: TrainingStatus.notStarted
	},   
	{
		id: 2,
		name: 'The Onboarding Process',
		dueDate: new Date(),
		timeToComplete: 0.5,
		progress: 0,
		description: 'An overview of the process that you will be going through on DeCKR',
		status: TrainingStatus.notStarted
	},   
	{
		id: 3,
		name: 'Initial HR Training',
		dueDate: new Date(),
		timeToComplete: 2,
		progress: 0,
		description: 'Policies regarding the fair treatment of all employees',
		status: TrainingStatus.notStarted
	},   
	{
		id: 4,
		name: 'Policies and Procedures',
		dueDate: new Date(),
		timeToComplete: 2,
		progress: 0,
		description: 'The overview of the rules and expectatiomns of your new position',
		status: TrainingStatus.notStarted
	},   
	{
		id: 5,
		name: 'Time Off and Sick Leave Policies',
		dueDate: new Date(),
		timeToComplete: 1,
		progress: 0,
		description: 'Rules and poclies governing sick days and vacation time',
		status: TrainingStatus.notStarted
	},
	{
		id: 6,
		name: 'Safeguarding Sensitive Information Training',
		dueDate: new Date(),
		timeToComplete: 3,
		progress: 0,
		description: 'Training regarding the protection and proper treatment of sensitive information',
		status: TrainingStatus.notStarted
	}   
]