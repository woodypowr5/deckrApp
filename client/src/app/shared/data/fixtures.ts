export const Fixtures = {
    user: {

    },
    contracts: [
        {   
            id: 1,
            name: 'Test Contract 1',
            signed: false,
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
        }
    ],
    securityGroups: [
        {
            id: 1,
            name: 'Security Group 1',
            iconName: "test",
            desciption: 'i\'m a sweet icon'        
        },
        {
            id: 2,
            name: 'Security Group 2',
            iconName: "test",
            desciption: 'i\'m a sweet icon'        
        },
        {
            id: 3,
            name: 'Security Group 3',
            iconName: "test",
            desciption: 'i\'m a sweet icon'        
        },
        {
            id: 4,
            name: 'Security Group 4',
            iconName: "test",
            desciption: 'i\'m a sweet icon'        
        },
    ],
    trainings: [
        {
            id: 1,
            name: 'Training 1',
            dueDate: new Date(),
            timeToComplete: 2,
            progress: 0,
            description: 'test',
            status: 'not started'
        },   
        {
            id: 2,
            name: 'Training 2',
            dueDate: new Date(),
            timeToComplete: 4,
            progress: 50,
            description: 'test',
            status: 'in progress'
        },   
        {
            id: 3,
            name: 'Training 3',
            dueDate: new Date(),
            timeToComplete: 1,
            progress: 0,
            description: 'test',
            status: 'not started'
        },   
        {
            id: 4,
            name: 'Training 4',
            dueDate: new Date(),
            timeToComplete: 2.5,
            progress: 100,
            description: 'test',
            status: 'complete'
        },   
    ]
}
