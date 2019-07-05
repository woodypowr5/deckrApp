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
   // [EnableCors(origins: "http://deckr1.gearhostpreview.com", headers: "*", methods: "*")]
    public class ContractController : ApiController
    {
        DomainModel model = new DomainModel();
        public List<ContractModel> Get()
        {
            return model.GetContracts().ToList<ContractModel>();
        }
        public List<ContractModel> Get(string Id)
        {
            return model.GetUserContracts(Id).ToList<ContractModel>();
        }      

        [HttpPost]
        public void Post(string Id, int contractId, bool sign)
        {
            bool result = model.SignContract(Id, contractId, sign);
        }
    }
}
