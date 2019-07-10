using System;

/*****************************************************
* Project Name: DeCKR                                *
* Date: 07/01/2019                                   *
* Course: CSC 687 - Computer Science Project II      *
* Instructor: Mudasser Wyne                          *
******************************************************/

namespace DeCKR_WebAPI.Models
{
    /// <summary>
    /// Contracts View Model Class
    /// </summary>
    public class ContractModel
    {
        /// <summary>
        /// Identifier for Contract
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Name of the Contract
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// URL for the thumbnail image
        /// </summary>
        public string ThumbnailURL { get; set; }

        /// <summary>
        /// URL for content of the contract
        /// </summary>
        public string ContentURL { get; set; }

        /// <summary>
        /// Date when the contract is signed
        /// </summary>
        public DateTime? Date { get; set; }
    }
}