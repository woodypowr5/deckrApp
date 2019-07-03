/*****************************************************
* Project Name: DeCKR                                *
* Date: 07/01/2019                                   *
* Course: CSC 687 - Computer Science Project II      *
* Instructor: Mudasser Wyne                          *
******************************************************/

namespace DeCKR_WebAPI.Models
{
    public class SecurityGroupModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }
    }

    public class UserSecurityGroupModel
    {
        public int DepartmentId { get; set; }

        public SecurityGroupModel SecurityGroup { get; set; }

    }
}