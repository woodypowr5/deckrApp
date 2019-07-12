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
    [EnableCors(origins: "http://localhost:1433", headers: "*", methods: "*")]
    [RoutePrefix("api/adminsettings")]
    public class AdminSettingsController : ApiController
    {
        /// <summary>
        /// object for the domain model class
        /// </summary>
        DomainModel model = new DomainModel();

        //Gets all users settings 
        public List<AdminSettingsModel> Get()
        {
            return model.GetSettings().ToList();
        }

        //Gets single user settings 
        [Route("UserSettings/{employeeID}")]
        public List<AdminSettingsModel> GetUserSettings(int employeeID)
        {
            return model.GetUserSettings(employeeID).ToList();
        }


        //Gets Department  settings 
        [Route("DepartmentSettings/{departmentID}")]
        public List<AdminSettingsModel> GetDepartmentSettings(int departmentID)
        {
            return model.GetDepartmentSettings(departmentID).ToList();
        }
    }
}
