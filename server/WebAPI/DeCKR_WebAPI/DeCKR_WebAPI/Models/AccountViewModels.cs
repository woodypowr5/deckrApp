using System;
using System.Collections.Generic;

/*****************************************************
* Project Name: DeCKR                                *
* Date: 07/01/2019                                   *
* Course: CSC 687 - Computer Science Project II      *
* Instructor: Mudasser Wyne                          *
******************************************************/

namespace DeCKR_WebAPI.Models
{
    // Models returned by AccountController actions.


    public class UserInfoViewModel
    {
        public string Email { get; set; }

        public bool HasRegistered { get; set; }
    }
}
