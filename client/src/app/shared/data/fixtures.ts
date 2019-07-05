import { TrainingStatus } from '../types/training-status';


export const Fixtures = {
    user: {
		id: 1,
		name: 'Test User',
		email: 'test@test.com',
		hashedPassword: 'a',
		salt: 'a',
		createdAt: new Date(),
		updatedAt: new Date()
    },
    contracts: [
        {   
            id: 1,
            name: 'Test Contract 1',
            signed: true,
            description: 'Just a test contract',
            thumbnailUrl: 'test',
            instanceUrl: 'test'
        },
        {
            id: 2,
            name: 'Test Contract 2',
            signed: false,
            description: 'Just another test contract',
            thumbnailUrl: 'test',
            instanceUrl: 'test'
        },
        {
            id: 3,
            name: 'Test Contract 3',
            signed: false,
            description: 'Just the third test contract',
            thumbnailUrl: 'test',
            instanceUrl: 'test'
		},
		{
            id: 4,
            name: 'Test Contract 3',
            signed: true,
            description: 'Just the third test contract',
            thumbnailUrl: 'test',
            instanceUrl: 'test'
		},
		{
            id: 5,
            name: 'Test Contract 3',
            signed: false,
            description: 'Just the third test contract',
            thumbnailUrl: 'test',
            instanceUrl: 'test'
        }
    ],
    securityGroups: [
        {
            id: 1,
            name: 'Webmaster',
            iconName: "web",
            desciption: 'i\'m a sweet icon'       
        },
        {
            id: 2,
            name: 'Personnel Records',
            iconName: "recent_actors",
            desciption: 'i\'m a sweet icon'        
        },
        {
            id: 3,
            name: 'Cryptographpics',
            iconName: "vpn_key",
            desciption: 'i\'m a sweet icon'        
        },
        {
            id: 4,
            name: "Remote Access Administrator",
            iconName: "rss_feed",
            desciption: 'i\'m a sweet icon'        
		},
		{
            id: 5,
            name: 'Email Administrator',
            iconName: "mail_outline",
            desciption: 'i\'m a sweet icon'        
		},
		{
            id: 6,
            name: 'Cloud Storage Manager',
            iconName: "archive",
            desciption: 'i\'m a sweet icon'        
		},
		{
            id: 6,
            name: 'Computer Equipment Manager',
            iconName: "devices",
            desciption: 'i\'m a sweet icon'        
		},
		{
            id: 6,
            name: 'Network Infrastructure Manager',
            iconName: "router",
            desciption: 'i\'m a sweet icon'        
		},
		{
            id: 6,
            name: 'Operating System Security Manager',
            iconName: "security",
            desciption: 'i\'m a sweet icon'        
        }
	],
	approvedSecurityGroups: [1, 2, 5],
    trainings: [
        {
            id: 1,
            name: 'Training 1',
            dueDate: new Date(),
            timeToComplete: 2,
            progress: 0,
            description: 'This is an exemple training. It is really awesome.',
            status: TrainingStatus.notStarted
        },   
        {
            id: 2,
            name: 'Training 2',
            dueDate: new Date(),
            timeToComplete: 4,
            progress: 50,
            description: 'This is another example training',
            status: TrainingStatus.inProgress
        },   
        {
            id: 3,
            name: 'Training 3',
            dueDate: new Date(),
            timeToComplete: 1,
            progress: 0,
            description: 'Sometimes I like to sleep in late. It is also really awesome, although its like totally too long and is overflowing',
            status: TrainingStatus.notStarted
        },   
        {
            id: 4,
            name: 'Training 4',
            dueDate: new Date(),
            timeToComplete: 2.5,
            progress: 100,
            description: 'This is another example training. Yeah',
            status: TrainingStatus.complete
        },   
    ]
}
