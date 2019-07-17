export const ApiUrls = {
	base: "http://deckrwebapi.azurewebsites.net/api/",
	users: {
		base: "user",
		slugs: {
			getUsers: "",
			getUserById: "SingleUser",
			getUsersByDepartmentId: "DepartmentUsers",
			createUser: ""
		}
	}
}

// 1)All Users - http://deckrwebapi.azurewebsites.net/api/user
// 2)Get Single User Info - http://deckrwebapi.azurewebsites.net/api/user/SingleUser/1
// 3)Get Department Users Info - http://deckrwebapi.azurewebsites.net/api/user/DepartmentUsers/2
// 4)Register User - http://deckrwebapi.azurewebsites.net/api/user/post?name=name1&emailaddress=emailaddress1&jobrole=jobrole1&password=password1
