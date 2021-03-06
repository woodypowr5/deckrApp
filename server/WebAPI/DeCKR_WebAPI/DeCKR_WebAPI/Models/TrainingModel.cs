﻿using System;

/*****************************************************
* Project Name: DeCKR                                *
* Date: 07/01/2019                                   *
* Course: CSC 687 - Computer Science Project II      *
* Instructor: Mudasser Wyne                          *
******************************************************/
namespace DeCKR_WebAPI.Models
{
    public class TrainingModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Duration { get; set; }
        public string TrainingURL { get; set; }
        public DateTime DueDate { get; set; }
    }


    public class UserTrainingModel
    {
        public TrainingModel Training { get; set; }

        public int Progress { get; set; }

        public string Status { get; set; }

    }
}