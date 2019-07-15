using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;
using DeCKR_WebAPI.Models;

namespace DeCKR_WebAPI.Maps
{
    public class UserMap : EntityTypeConfiguration<ApplicationUser>
    {
        public UserMap()
        {
            ToTable("EmployeeUser");

            Property(u => u.Email).HasColumnName("EmailId").IsRequired();

            Property(u => u.PasswordHash).IsRequired();

            Property(u => u.Name).IsRequired();

            Property(u => u.JobRole).IsRequired();
        }
    }
}