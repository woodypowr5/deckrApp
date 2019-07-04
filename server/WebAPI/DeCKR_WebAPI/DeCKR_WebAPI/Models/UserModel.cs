using System;

/*****************************************************
* Project Name: DeCKR                                *
* Date: 07/01/2019                                   *
* Course: CSC 687 - Computer Science Project II      *
* Instructor: Mudasser Wyne                          *
******************************************************/

namespace DeCKR_WebAPI.Models
{
    public class UserModel
    {
        public string UserId { get; set; }
        public string PasswordHash { get; set; }
        public string Salt { get; set; }
        public string Name { get; set; }
        public string JobTitle { get; set; }
        public int DepartmentId { get; set; }
        public string Address { get; set; }
        public DateTime DOB { get; set; }
        public string SSN { get; set; }
        public string BankInfo { get; set; }
        public string Education { get; set; }
        public string PrevEmployment { get; set; }
    }
}