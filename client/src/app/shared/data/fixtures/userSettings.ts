import { UserSettings } from '../../types/user-settings';

export const userSettingsFixture: UserSettings[] = [
	{
		moduleName: "Trainings",
		moduleID: 1,
		settings: [

			{
				settingID: 1,
				settingName: "Modify Completed Trainigns",
				settingDescription: "Allow the user to modify the progress of already completed trainings",
				settingValue: true
			},
			{
				settingID: 2,
				settingName: "Show completed trainings",
				settingDescription: "Allow user to view already-completed trainings",
				settingValue: true
			},
			{
				settingID: 3,
				settingName: "Sensitive Information Training Required",
				settingDescription: "Allow access to sensitive information training",
				settingValue: true
			}
		]
	},	
	{
		moduleName: "User Home",
		moduleID: 2,
		settings: [
			{
				settingID: 1,
				settingName: "Trainings Summary",
				settingDescription: "Show the summary pane for the Trainings module",
				settingValue: true
			},
			{
				settingID: 2,
				settingName: "Contracts Summary",
				settingDescription: "Show the summary pane for the Contracts module",
				settingValue: true
			},
			{
				settingID: 3,
				settingName: "List Security Groups",
				settingDescription: "Show the summary pane for the Security Groups module",
				settingValue: true
			}
		]
	},	
	{
		moduleName: "Contracts",
		moduleID: 3,
		settings: [
			{
				settingID: 1,
				settingName: "NDA",
				settingDescription: "Access to non-disclosure agreement",
				settingValue: true
			},
			{
				settingID: 2,
				settingName: "Non-Compete",
				settingDescription: "Access to non-compete agreement",
				settingValue: true
			},
			{		
				settingID: 4,
				settingName: "Roles & Responsibilities",
				settingDescription: "Access to the job roles and responsibilities agreeement",
				settingValue: true
			},
			{		
				settingID: 5,
				settingName: "Compensation",
				settingDescription: "Access to the contract goverrning compensation and pay policies",
				settingValue: true
			},
			{
				settingID: 3,
				settingName: "Terms of Employment",
				settingDescription: "Access to terms of employement contract",
				settingValue: true
			}
		]
	},	
	{
		moduleName: "Security Groups",
		moduleID: 4,
		settings: [
			{
				settingID: 1,
				settingName: "Show Non-Approved Groups",
				settingDescription: "Show security groups for which the user is not approved so that he or she may request access",
				settingValue: true
			}
		]
	}
]
