import { Contract } from '../../types/contract';
export const contractsFixture: Contract[] = [
	{   
		id: 1,
		name: 'Non Disclosure Agreement',
		signed: new Date(),
		description: 'An agreement to not share proprietary information',
		thumbnailUrl: '../../../../assets/nda.png',
		instanceUrl: '../../../../assets/nda.pdf'
	},
	{
		id: 2,
		name: 'Non-Compete Agreement',
		signed: new Date(),
		description: 'An agreement governing the rights of job seekers and employers',
		thumbnailUrl: 'https://deckr-f715d.web.app/assets/non-compete.png',
		instanceUrl: 'https://deckr-f715d.web.app/assets/non-compete.pdf'
	},
	{
		id: 3,
		name: 'Roles & Responsibilities',
		signed: new Date(),
		description: 'Your duties and responsibilities',
		thumbnailUrl: '/assets/rnr.png',
		instanceUrl: '/assets/rnr.pdf'
	},
	{
		id: 4,
		name: 'Compensation & Benefits Contract',
		signed: new Date(),
		description: '',
		thumbnailUrl: '/assets/compensation.png',
		instanceUrl: '/assets/compensation.pdf'
	},
	{
		id: 5,
		name: 'Terms of Employment',
		signed: new Date(),
		description: 'For legal purposes regarding your employment here',
		thumbnailUrl: '/assets/employment.png',
		instanceUrl: '/assets/employment.pdf'
	}
]