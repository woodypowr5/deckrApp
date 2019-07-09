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
            return model.GetUsers().ToList<UserModel>();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public UserModel Get(int Id)
        {
            return model.GetUser(Id);
        }

        //public void Post(string Id, string passwordHash, string salt)
        //{
        //    bool result = model.SetUser(Id, passwordHash, salt);
        //}

    }
}
