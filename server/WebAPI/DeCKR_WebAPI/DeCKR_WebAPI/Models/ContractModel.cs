using System;

/*****************************************************
* Project Name: DeCKR                                *
* Date: 07/01/2019                                   *
* Course: CSC 687 - Computer Science Project II      *
* Instructor: Mudasser Wyne                          *
******************************************************/

namespace DeCKR_WebAPI.Models
{
    public class ContractModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public DateTime? Date { get; set; }
    }
}