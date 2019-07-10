using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

/*****************************************************
* Project Name: DeCKR                                *
* Date: 07/01/2019                                   *
* Course: CSC 687 - Computer Science Project II      *
* Instructor: Mudasser Wyne                          *
******************************************************/
namespace DeCKR_WebAPI.Models
{
    public class DomainModel
    {
        public UserModel GetUser(int userId)
        {
            UserModel user = new UserModel();
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetUser";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@EmployeeId", userId));
                    SqlDataReader dr=cmd.ExecuteReader(CommandBehavior.Default);
                    while(dr.Read())
                    {
                        user.EmployeeID = Convert.ToInt32(dr["EmployeeID"]);
                        user.Name = Convert.ToString(dr["Name"]);
                        user.JobRole = Convert.ToString(dr["JobRoleName"]);
                        user.Department = Convert.ToString(dr["DepartmentName"]);
                        user.EmailAddress= Convert.ToString(dr["EmailAddress"]);
                        //user.PasswordHash = Convert.ToString(dr["PasswordHash"]);
                        // user.Salt = Convert.ToString(dr["Salt"]);
                        // user.Address = Convert.ToString(dr["Address"]);
                        //user.BankInfo = Convert.ToString(dr["BankInfo"]);
                        //user.DOB = Convert.ToDateTime(dr["DOB"]);
                        //user.SSN = Convert.ToString(dr["SSN"]);
                        //user.Education = Convert.ToString(dr["Education"]);
                        //user.PrevEmployment = Convert.ToString(dr["PrevEmployment"]);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }

            return user;
        }

        public List<UserModel> GetUsers()
        {
            List<UserModel> users = new List<UserModel>();
            UserModel user;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetUser";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                     SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        user = new UserModel();
                        user.EmployeeID = Convert.ToInt32(dr["EmployeeID"]);
                        user.Name = Convert.ToString(dr["Name"]);
                        user.JobRole = Convert.ToString(dr["JobRoleName"]);
                        user.Department = Convert.ToString(dr["DepartmentName"]);
                        user.EmailAddress = Convert.ToString(dr["EmailAddress"]);
                        // user.PasswordHash = Convert.ToString(dr["PasswordHash"]);
                        //user.Salt = Convert.ToString(dr["Salt"]);
                        //user.BankInfo = Convert.ToString(dr["BankInfo"]);
                        //user.DOB = Convert.ToDateTime(dr["DOB"]);
                        //user.SSN = Convert.ToString(dr["SSN"]);
                        //user.Education = Convert.ToString(dr["Education"]);
                        //user.PrevEmployment = Convert.ToString(dr["PrevEmployment"]);
                        users.Add(user);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return users;
        }

        public List<UserModel> GetDepartmentUsers(int departmentID)
        {
            List<UserModel> users = new List<UserModel>();
            UserModel user;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetDepartmentUser";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@DepartmentID", departmentID));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        user = new UserModel();
                        user.EmployeeID = Convert.ToInt32(dr["EmployeeID"]);
                        user.Name = Convert.ToString(dr["Name"]);
                        user.JobRole = Convert.ToString(dr["JobRoleName"]);
                        user.Department = Convert.ToString(dr["DepartmentName"]);
                        user.EmailAddress = Convert.ToString(dr["EmailAddress"]);
                        
                        users.Add(user);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return users;
        }


        public bool SetPassword (string userId, string passwordHash, string salt)
        {
            bool result = false;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "SetPassword";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@UserId", userId));
                    cmd.Parameters.Add(new SqlParameter("@PasswordHash", passwordHash));
                    cmd.Parameters.Add(new SqlParameter("@Salt", salt));
                    cmd.ExecuteNonQuery();
                    result = true;
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return result;
        }

        public List<SecurityGroupModel> GetSecurityGroups()
        {
            List<SecurityGroupModel> groups = new List<SecurityGroupModel>();
            SecurityGroupModel group;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetSecurityGroup";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        group = new SecurityGroupModel();
                        group.Id= Convert.ToInt32(dr["SecurityId"]);
                        group.Name = Convert.ToString(dr["SecurityName"]);
                        group.Description = Convert.ToString(dr["SecurityDescription"]);
                        group.iconName= Convert.ToString(dr["IconName"]);
                        groups.Add(group);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return groups;
        }

        public SecurityGroupModel GetSecurityGroup(int securityID)
        {
            SecurityGroupModel group= new SecurityGroupModel(); ;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetSecurityGroup";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@SecurityID", securityID));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        group.Id = Convert.ToInt32(dr["SecurityId"]);
                        group.Name = Convert.ToString(dr["SecurityName"]);
                        group.Description = Convert.ToString(dr["SecurityDescription"]);
                        group.iconName = Convert.ToString(dr["IconName"]);
                        
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return group;
        }

        public List<TrainingModel> GetTrainings()
        {
            List<TrainingModel> trainings = new List<TrainingModel>();
            TrainingModel training;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetTraining";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        training = new TrainingModel();
                        training.Id = Convert.ToInt32(dr["TrainingID"]);
                        training.Name = Convert.ToString(dr["Name"]);
                        training.Description = Convert.ToString(dr["Description"]);
                        training.Duration = Convert.ToInt32(dr["Duration"]);
                        training.DueDate = Convert.ToDateTime(dr["DueDate"]);
                        training.TrainingURL = Convert.ToString(dr["TrainingURL"]); 
                        trainings.Add(training);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return trainings;
        }

        public TrainingModel GetTraining(int trainingID)
        {
            TrainingModel training = new TrainingModel();
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetTraining";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@TrainingID", trainingID));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                       
                        training.Id = Convert.ToInt32(dr["TrainingID"]);
                        training.Name = Convert.ToString(dr["Name"]);
                        training.Description = Convert.ToString(dr["Description"]);
                        training.Duration = Convert.ToInt32(dr["Duration"]);
                        training.DueDate = Convert.ToDateTime(dr["DueDate"]);
                        training.TrainingURL = Convert.ToString(dr["TrainingURL"]); 
                        
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return training;
        }

        public List<ContractModel> GetContracts()
        {
            List<ContractModel> contracts = new List<ContractModel>();
            ContractModel contract;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetContract";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        contract = new ContractModel();
                        contract.Id = Convert.ToInt32(dr["ContractID"]);
                        contract.Name = Convert.ToString(dr["ContractName"]);
                        contract.ThumbnailURL = Convert.ToString(dr["ThumbnailURL"]);
                        contract.ContentURL = Convert.ToString(dr["ContentURL"]);

                        contracts.Add(contract);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return contracts;
        }

        public ContractModel GetContract(int contractId)
        {
            ContractModel contract =new ContractModel(); ;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetContract";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@ContractID", contractId));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        contract.Id = Convert.ToInt32(dr["ContractID"]);
                        contract.Name = Convert.ToString(dr["ContractName"]);
                        contract.ThumbnailURL = Convert.ToString(dr["ThumbnailURL"]);
                        contract.ContentURL = Convert.ToString(dr["ContentURL"]);                        
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return contract;
        }

        public List<DepartmentModel> GetDepartments()
        {
            List<DepartmentModel> departments = new List<DepartmentModel>();
            DepartmentModel department;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetDepartment";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        department = new DepartmentModel();
                        department.Id = Convert.ToInt32(dr["DepartmentID"]);
                        department.Name = Convert.ToString(dr["DepartmentName"]);

                        departments.Add(department);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return departments;
        }

        public List<JobRoleModel> GetJobRoles()
        {
            List<JobRoleModel> jobRoles = new List<JobRoleModel>();
            JobRoleModel jobRole;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetJobRole";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        jobRole = new JobRoleModel();
                        jobRole.Id = Convert.ToInt32(dr["JobRoleID"]);
                        jobRole.Name = Convert.ToString(dr["JobRoleName"]);

                        jobRoles.Add(jobRole);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return jobRoles;
        }

        public UserModel GetPassword(string userId)
        {
            UserModel user = new UserModel();
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetPassword";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@UserId", userId));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        user.EmployeeID = Convert.ToInt32(dr["UserID"]);
                        user.Name = Convert.ToString(dr["Name"]);
                       // user.PasswordHash = Convert.ToString(dr["PasswordHash"]);
                       // user.Salt = Convert.ToString(dr["Salt"]);
                       
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return user;
        }

        public List<UserTrainingModel> GetUserTrainings(int EmployeeId)
        {
            List<UserTrainingModel> trainings = new List<UserTrainingModel>();
            UserTrainingModel training;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetUserTrainings";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@EmployeeId", EmployeeId));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        training = new UserTrainingModel();
                        training.Training = new TrainingModel();
                        training.Training.Id = Convert.ToInt32(dr["TrainingID"]);
                        training.Training.Name = Convert.ToString(dr["Name"]);
                        training.Training.Description = Convert.ToString(dr["Description"]);
                        training.Training.Duration = Convert.ToInt32(dr["Duration"]);
                        training.Training.DueDate = Convert.ToDateTime(dr["DueDate"]);
                        training.Training.TrainingURL = Convert.ToString(dr["TrainingURL"]);
                        training.Progress= Convert.ToInt32(dr["Progress"]);
                        training.Status = Convert.ToString(dr["Status"]);
                        trainings.Add(training);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return trainings;
        }

        public List<TrainingModel> GetDefaultTrainings(int EmployeeId)
        {
            List<TrainingModel> trainings = new List<TrainingModel>();
            TrainingModel training;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetDefaultTrainings";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@EmployeeID", EmployeeId));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        training = new TrainingModel();
                        training.Id = Convert.ToInt32(dr["TrainingID"]);
                        training.Name = Convert.ToString(dr["Name"]);
                        training.Description = Convert.ToString(dr["Description"]);
                        training.Duration = Convert.ToInt32(dr["Duration"]);
                        training.DueDate = Convert.ToDateTime(dr["DueDate"]);
                        training.TrainingURL = Convert.ToString(dr["TrainingURL"]);

                        trainings.Add(training);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return trainings;
        }

        public List<ContractModel> GetUserContracts(int EmployeeId)
        {
            List<ContractModel> contracts = new List<ContractModel>();
            ContractModel contract;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetUserContracts";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@EmployeeID", EmployeeId));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        contract = new ContractModel();
                        contract.Id = Convert.ToInt32(dr["ContractId"]);
                        contract.Name = Convert.ToString(dr["ContractName"]);
                        contract.ThumbnailURL = Convert.ToString(dr["ThumbnailURL"]);
                        contract.ContentURL = Convert.ToString(dr["ContentURL"]);
                        if (!dr.IsDBNull(dr.GetOrdinal("Date")))  contract.Date = Convert.ToDateTime(dr["Date"]);
                       
                        contracts.Add(contract);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return contracts;
        }

        public List<ContractModel> GetDefaultContracts(int EmployeeId)
        {
            List<ContractModel> contracts = new List<ContractModel>();
            ContractModel contract;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetDefaultContracts";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@EmployeeID", EmployeeId));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        contract = new ContractModel();
                        contract.Id = Convert.ToInt32(dr["ContractId"]);
                        contract.Name = Convert.ToString(dr["ContractName"]);
                        contract.ThumbnailURL = Convert.ToString(dr["ThumbnailURL"]);
                        contract.ContentURL = Convert.ToString(dr["ContentURL"]);
                        
                        contracts.Add(contract);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return contracts;
        }

        public List<SecurityGroupModel> GetDefaultSecurityGroups(int EmployeeId)
        {
            List<SecurityGroupModel> securityGroups = new List<SecurityGroupModel>();
            SecurityGroupModel securityGroup;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetDefaultSecurityGroups";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@EmployeeID", EmployeeId));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        securityGroup = new SecurityGroupModel();
                        securityGroup.Id = Convert.ToInt32(dr["SecurityID"]);
                        securityGroup.Name = Convert.ToString(dr["SecurityName"]);
                        securityGroup.Description = Convert.ToString(dr["SecurityDescription"]);
                        securityGroup.iconName = Convert.ToString(dr["IconName"]);
                        securityGroups.Add(securityGroup);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return securityGroups;
        }

        public List<UserSecurityGroupModel> GetUserSecurityGroups(int employeeId)
        {
            List<UserSecurityGroupModel> securityGroups = new List<UserSecurityGroupModel>();
            UserSecurityGroupModel securityGroup;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetUserSecurityGroups";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@EmployeeID", employeeId));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        securityGroup = new UserSecurityGroupModel();
                       
                        securityGroup.SecurityGroup = new SecurityGroupModel();
                        securityGroup.SecurityGroup.Id= Convert.ToInt32(dr["SecurityID"]);
                        securityGroup.SecurityGroup.Name = Convert.ToString(dr["SecurityName"]);
                        securityGroup.SecurityGroup.Description = Convert.ToString(dr["SecurityDescription"]);
                        securityGroup.Status = Convert.ToString(dr["Status"]);
                        securityGroups.Add(securityGroup);
                    }
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return securityGroups;
        }

        public bool SetTrainingStatus(int employeeID, int trainingId, string status, int progress)
        {
            bool result = false;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "SetTrainingStatus";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@EmployeeID", employeeID));
                    cmd.Parameters.Add(new SqlParameter("@TrainingId", trainingId));
                    cmd.Parameters.Add(new SqlParameter("@Status", status));
                    cmd.Parameters.Add(new SqlParameter("@Progress", progress));
                    cmd.ExecuteNonQuery();
                    result = true;
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return result;
        }

        public bool SignContract(string employeeId, int contractId, bool sign)
        {
            bool result = false;
            try
            {
                if (sign)
                {
                    using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                    {
                        conn.Open();
                        string sqlStr = "SignContract";
                        SqlCommand cmd = new SqlCommand(sqlStr, conn);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Clear();
                        cmd.Parameters.Add(new SqlParameter("@EmployeeId", employeeId));
                        cmd.Parameters.Add(new SqlParameter("@ContractId", contractId));

                        cmd.ExecuteNonQuery();
                        result = true;
                        cmd.Parameters.Clear();
                        cmd.Dispose();
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return result;
        }

        public bool SetSecurityGroup(int employeeId, int securityId, string status)
        {
            bool result = false;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "SetSecurityGroup";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@SecurityID", securityId));
                    cmd.Parameters.Add(new SqlParameter("@EmployeeID", employeeId));
                    cmd.Parameters.Add(new SqlParameter("@Status", status));
                    cmd.ExecuteNonQuery();
                    result = true;
                    cmd.Parameters.Clear();
                    cmd.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return result;
        }
    }

    //public class FakeDomainModel : IDomainModel
    //{
    //    private List<UserModel> _userModels = new List<UserModel>() { new UserModel { EmployeeID = "1", Name = "krishna" }, new UserModel() { EmployeeID = "2", Name = "nish" } };
    //    public UserModel GetUser(string userId)
    //    {
    //        return _userModels.FirstOrDefault(d => d.EmployeeID == userId);
    //    }
    //}

    //public interface IDomainModel
    //{
    //    UserModel GetUser(string userId);
    //}
}