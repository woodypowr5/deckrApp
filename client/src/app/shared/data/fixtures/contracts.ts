import { Contract } from '../../types/contract';

export const contractsFixture: Contract[] = [
	{   
		id: 1,
		name: 'Non Disclosure Agreement',
		signed: false,
		description: 'An agreement to not share proprietary information',
		thumbnailUrl: 'test',
		instanceUrl: '/assets/nda.pdf'
	},
	{
		id: 2,
		name: 'Non-Compete Agreement',
		signed: false,
		description: 'An agreement governing the rights of job seekers and employers',
		thumbnailUrl: '/assets/non-compete.png',
		instanceUrl: '/assets/non-compete.pdf'
	},
	{
		id: 3,
		name: 'Roles & Responsibilities',
		signed: false,
		description: 'Your duties and responsibilities',
		thumbnailUrl: '/assets/rnr.png',
		instanceUrl: '/assets/rnr.pdf'
	},
	{
		id: 4,
		name: 'Compensation & Benefits Contract',
		signed: false,
		description: '',
		thumbnailUrl: '/assets/compensation.png',
		instanceUrl: '/assets/compensation.pdf'
	},
	{
		id: 5,
		name: 'Terms of Employment',
		signed: false,
		description: 'For legal purposes regarding your employment here',
		thumbnailUrl: '/assets/employment.png',
		instanceUrl: '/assets/employment.pdf'
	}
]