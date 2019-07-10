using DeCKR_WebAPI.Models;
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
     public class UserController : ApiController
    {
        DomainModel model = new DomainModel(); 
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// returns user in a department
        /// </summary>
        /// <param name="Id">EmployeeID</param>
        /// <returns>single user</returns>
        [ActionName("DepartmentUsers")]
        public List<UserModel> GetDepartmentUsers(int departmentID)
        {
            return model.GetDepartmentUsers(departmentID).ToList();
        }

        //public void Post(string Id, string passwordHash, string salt)
        //{
        //    bool result = model.SetUser(Id, passwordHash, salt);
        //}

    }
}
