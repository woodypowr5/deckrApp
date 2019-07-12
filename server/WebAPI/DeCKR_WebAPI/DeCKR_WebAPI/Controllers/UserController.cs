using DeCKR_WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

/*****************************************************
* Project Name: DeCKR                                *
* Date: 07/01/2019                                   *
* Course: CSC 687 - Computer Science Project II      *
* Instructor: Mudasser Wyne                          *
******************************************************/

namespace DeCKR_WebAPI.Controllers
{
    /// <summary>
    /// user controller class
    /// </summary>
    [EnableCors(origins: "http://localhost:1433", headers: "*", methods: "*")]
    [RoutePrefix("api/user")]
     public class UserController : ApiController
    {
        DomainModel model = new DomainModel(); 
        /// <summary>
        /// Returns all users
        /// </summary>
        /// <returns>List of UserModel objects</returns>
        public List<UserModel> Get()
        {
            return model.GetUsers().ToList();
        }

        /// <summary>
        /// returns a single user
        /// </summary>
        /// <param name="Id">EmployeeID</param>
        /// <returns>single user</returns>
        [ActionName("SingleUser")]
        public UserModel Get(int Id)
        {
            return model.GetUser(Id);
        }

        [HttpGet]
        [Route("DepartmentUsers/{departmentID}")]
        public List<UserModel> DepartmentUsers(string departmentID)
        {
            return model.GetDepartmentUsers(Convert.ToInt32(departmentID)).ToList();
        }

        /// <summary>
        /// Register a user
        /// </summary>
        /// <param name="name">Name of the user</param>
        /// <param name="emailaddress">Email Address of the user</param>
        /// <param name="jobRole">Job Role of the user</param>
        /// <param name="password">Password of the user</param>
        /// <returns>Status of the user registration</returns>
        [HttpPost]
        public int RegisterUser(string name,  string emailaddress, string jobRole, string password)
        {
            return model.RegisterUser(name, emailaddress, jobRole, password);
        }
    }
}
