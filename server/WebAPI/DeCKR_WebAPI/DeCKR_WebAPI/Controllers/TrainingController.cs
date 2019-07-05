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
    //[EnableCors(origins: "http://deckr1.gearhostpreview.com", headers: "*", methods: "*")]
    public class TrainingController : ApiController
    {
        DomainModel model = new DomainModel();
        public List<TrainingModel> Get()
        {
            return model.GetTrainings().ToList<TrainingModel>();
        }
        public List<TrainingModel> Get(string Id)
        {
            return model.GetUserTrainings(Id).ToList<TrainingModel>();
        }

        [HttpPost]
        public void Post(string Id, int trainingId, string status, int completion)
        {
            bool result = model.SetTrainingStatus(Id, trainingId,status, completion);
        }
    }
}
