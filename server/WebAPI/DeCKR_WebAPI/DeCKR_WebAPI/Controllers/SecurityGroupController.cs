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
    public class SecurityGroupController : ApiController
    {
        DomainModel model = new DomainModel();

        public List<SecurityGroupModel> Get()
        {
            return model.GetSecurityGroups().ToList();
        }

        /// <summary>
        /// Returns a contract
        /// </summary>
        /// <param name="Id">ContractId</param>
        /// <returns>List of user Contracts</returns>
        [ActionName("SingleSecurityGroup")]
        public SecurityGroupModel GetContract(int Id)
        {
            return model.GetSecurityGroup(Id);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="employeeID"></param>
        /// <returns></returns>
        [ActionName("UserSecurityGroups")]
        public List<UserSecurityGroupModel> Get(int employeeID)
        {
            return model.GetUserSecurityGroups(employeeID).ToList();
        }

        [HttpPost]
        public void Post(int employeeId, int securityId, string status)
        {
            bool result = model.SetSecurityGroup(employeeId, securityId, status);
        }
    }
}
