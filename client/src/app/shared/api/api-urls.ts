export const ApiUrls = {
	base: "http://deckrwebapi.azurewebsites.net/api/",
	auth: {
		base: "account",
	},	
	users: {
		base: "user",
		segments: {
			single: "SingleUser",
			byDepartment: "DepartmentUsers"
		}
	},	
	userHome: {
		base: "userhome",
		segments: {
			summary: "",
			securityGroupsProgress: "SecurityProgress",
			trainingsProgress: "TrainingProgress",
			contractsProgress: "ContractsProgress"
		}
	},
	adminHome: {
		base: "adminhome",
		segments: {
			progressByUser: "userProgress",
			progressByDepartment: "DepartmentProgress"
		}
	},
	securityGroups: {
		base: "SecurityGroup",
		segments: {
			single: "SingleSecurity",
			byUser: "UserSecurityGroups"
		}
	},
	trainings: {
		base: "Training",
		segments: {
			single: "SingleTraining",
			byUser: "UserTrainings"
		}
	},
	contracts: {
		base: "contract",
		segments: {
			single: "SingleContract",
			byUser: "UserContracts"
		}
	},
	departments: {
		base: "department",
	},
	jobRoles: {
		base: "jobrole",
	},
	modules: {
		base: "module",
	},
	adminSettings: {
		base: "adminsettings",
		segments: {
			byUser: "UserSettings",
			byDepartment: "DepartmentSettings"
		}
	}
}