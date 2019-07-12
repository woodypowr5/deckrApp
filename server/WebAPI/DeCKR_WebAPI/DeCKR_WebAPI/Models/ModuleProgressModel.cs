using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DeCKR_WebAPI.Models
{
    public class ModuleProgressModel
    {

        public int ModuleID { get; set; }

        public string ModuleName { get; set; }

        public int TotalTime { get; set;}

        public int CompletedTime { get; set; }
    }

    public class AdminProgressModel
    {
        public int EmployeeID { get; set; }

        public string Name { get; set; }

        public int TotalTime { get; set; }

        public int CompletedTime { get; set; }

        // public List<ModuleProgressModel> ModulesProgress { get; set; }
    }
}