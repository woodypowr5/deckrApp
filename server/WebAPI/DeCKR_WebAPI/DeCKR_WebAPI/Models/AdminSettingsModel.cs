using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/*****************************************************
* Project Name: DeCKR                                *
* Date: 07/01/2019                                   *
* Course: CSC 687 - Computer Science Project II      *
* Instructor: Mudasser Wyne                          *
******************************************************/

namespace DeCKR_WebAPI.Models
{
    public class AdminSettingsModel
    {

        public int SettingID { get; set; }

        public string SettingName { get; set; }

        public string SettingDescription { get; set; }

        public int SettingValue { get; set; }

        public int ModuleID { get; set; }
    }
}