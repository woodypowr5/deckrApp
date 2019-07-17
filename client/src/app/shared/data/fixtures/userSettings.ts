import { UserSettings } from '../../types/user-settings';

export const userSettingsFixture: UserSettings[] = [
	{
		moduleName: "Trainings",
		moduleID: 2,
		settings: [
			{
				settingID: 1,
				settingName: "Modify Completed Trainigns",
				settingDescription: "Allow the user to modify the progress of already completed trainings",
				settingValue: 1
			},
			{
				settingID: 2,
				settingName: "Show completed trainings",
				settingDescription: "Allow user to view already-completed trainings",
				settingValue: 0
			}
		]
	},	
	{
		moduleName: "User Home",
		moduleID: 1,
		settings: [
			{
				settingID: 1,
				settingName: "Filter Options",
				settingDescription: "Filter options when selected change the user progress view",
				settingValue: 0
			}
		]
	},	
	{
		moduleName: "Trainings",
		moduleID: 1,
		settings: [
			{
				settingID: 1,
				settingName: "Filter Options",
				settingDescription: "Filter options when selected change the user progress view",
				settingValue: 0
			}
		]
	},	
	{
		moduleName: "Contracts",
		moduleID: 1,
		settings: [
			{
				settingID: 1,
				settingName: "NDA",
				settingDescription: "Access to non-disclosure agreement",
				settingValue: 1
			},
			{
				settingID: 2,
				settingName: "Non-Compete",
				settingDescription: "Access to non-compete agreement",
				settingValue: 1
			},
			{
				settingID: 3,
				settingName: "Terms of Employment",
				settingDescription: "Access to terms of employement contract",
				settingValue: 1
			},
			{		
				settingID: 4,
				settingName: "Roles & Responsibilities",
				settingDescription: "Access to the job roles and responsibilities agreeement",
				settingValue: 1
			},
			{		
				settingID: 5,
				settingName: "Compensation",
				settingDescription: "Access to the contract goverrning compensation and pay policies",
				settingValue: 1
			}
		]
	},	
	{
		moduleName: "Security Groups",
		moduleID: 1,
		settings: [
			{
				settingID: 1,
				settingName: "Show Non-Approved Groups",
				settingDescription: "Show security groups for which the user is not approved so that he or she may request access",
				settingValue: 0
			}
		]
	}
]
