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
    /// Training Controller class
    /// </summary>
    [EnableCors(origins: "http://localhost:1433", headers: "*", methods: "*")]
    public class TrainingController : ApiController
    {
        DomainModel model = new DomainModel();
        
        /// <summary>
        /// Get all trainings
        /// </summary>
        /// <returns></returns>
        public List<TrainingModel> Get()
        {
            return model.GetTrainings().ToList<TrainingModel>();
        }

        /// <summary>
        /// Get Training
        /// </summary>
        /// <param name="Id">EmployeeId</param>
        /// <returns>Training Class object</returns>
        public List<TrainingModel> Get(string Id)
        {
            return model.GetUserTrainings(Id).ToList<TrainingModel>();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="Id"></param>
        /// <param name="trainingId"></param>
        /// <param name="status"></param>
        /// <param name="completion"></param>
        [HttpPost]
        public void Post(string Id, int trainingId, string status, int completion)
        {
            bool result = model.SetTrainingStatus(Id, trainingId,status, completion);
        }
    }
}
