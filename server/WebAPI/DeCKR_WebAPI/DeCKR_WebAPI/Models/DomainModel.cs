using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

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
        public UserModel GetUser(string userId)
        {
            UserModel user = new UserModel();
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetUserInfo";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@UserId", userId));
                    SqlDataReader dr=cmd.ExecuteReader(CommandBehavior.Default);
                    while(dr.Read())
                    {
                        user.UserId = Convert.ToString(dr["UserID"]);
                        user.Name = Convert.ToString(dr["Name"]);
                        user.PasswordHash = Convert.ToString(dr["PasswordHash"]);
                        user.Salt = Convert.ToString(dr["Salt"]);
                        user.JobTitle = Convert.ToString(dr["JobTitle"]);
                        user.DepartmentId = Convert.ToInt32(dr["DepartmentId"]);
                        user.Address = Convert.ToString(dr["Address"]);
                        user.BankInfo = Convert.ToString(dr["BankInfo"]);
                        user.DOB = Convert.ToDateTime(dr["DOB"]);
                        user.SSN = Convert.ToString(dr["SSN"]);
                        user.Education = Convert.ToString(dr["Education"]);
                        user.PrevEmployment = Convert.ToString(dr["PrevEmployment"]);
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
                    string sqlStr = "GetAllUsers";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                     SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        user = new UserModel();
                        user.UserId = Convert.ToString(dr["UserID"]);
                        user.Name = Convert.ToString(dr["Name"]);
                        user.PasswordHash = Convert.ToString(dr["PasswordHash"]);
                        user.Salt = Convert.ToString(dr["Salt"]);
                        user.JobTitle = Convert.ToString(dr["JobTitle"]);
                        user.DepartmentId = Convert.ToInt32(dr["DepartmentId"]);
                        user.Address = Convert.ToString(dr["Address"]);
                        user.BankInfo = Convert.ToString(dr["BankInfo"]);
                        user.DOB = Convert.ToDateTime(dr["DOB"]);
                        user.SSN = Convert.ToString(dr["SSN"]);
                        user.Education = Convert.ToString(dr["Education"]);
                        user.PrevEmployment = Convert.ToString(dr["PrevEmployment"]);
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
                    string sqlStr = "GetAllSecurityGroups";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        group = new SecurityGroupModel();
                        group.Id= Convert.ToInt32(dr["Id"]);
                        group.Name = Convert.ToString(dr["Name"]);
                        group.Description = Convert.ToString(dr["Description"]);
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

        public List<TrainingModel> GetTrainings()
        {
            List<TrainingModel> trainings = new List<TrainingModel>();
            TrainingModel training;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetAllTrainings";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        training = new TrainingModel();
                        training.Id = Convert.ToInt32(dr["Id"]);
                        training.Name = Convert.ToString(dr["Name"]);
                        training.Location = Convert.ToString(dr["Location"]);
                        training.Duration = Convert.ToInt32(dr["Duration"]);
                        training.Time = Convert.ToDateTime(dr["Time"]);
                        training.Status = "";
                        training.CompletionPercentage = 0;
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

        public List<ContractModel> GetContracts()
        {
            List<ContractModel> contracts = new List<ContractModel>();
            ContractModel contract;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetAllContracts";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        contract = new ContractModel();
                        contract.Id = Convert.ToInt32(dr["Id"]);
                        contract.Name = Convert.ToString(dr["Name"]);
                   
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

        public List<DepartmentModel> GetDepartments()
        {
            List<DepartmentModel> departments = new List<DepartmentModel>();
            DepartmentModel department;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetAllDepartments";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        department = new DepartmentModel();
                        department.Id = Convert.ToInt32(dr["Id"]);
                        department.Name = Convert.ToString(dr["Name"]);

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
                        user.UserId = Convert.ToString(dr["UserID"]);
                        user.Name = Convert.ToString(dr["Name"]);
                        user.PasswordHash = Convert.ToString(dr["PasswordHash"]);
                        user.Salt = Convert.ToString(dr["Salt"]);
                       
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

        public List<TrainingModel> GetUserTrainings(string userId)
        {
            List<TrainingModel> trainings = new List<TrainingModel>();
            TrainingModel training;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "GetUserTrainingInfo";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@UserId", userId));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        training = new TrainingModel();
                        training.Id = Convert.ToInt32(dr["TrainingId"]);
                        training.Name = Convert.ToString(dr["Name"]);
                        training.Time = Convert.ToDateTime(dr["Time"]);
                        training.Location = Convert.ToString(dr["Location"]);
                        training.Duration = Convert.ToInt32(dr["Duration"]);
                        training.Status = Convert.ToString(dr["Status"]);
                        training.CompletionPercentage = Convert.ToInt32(dr["CompletionPercentage"]);
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

        public List<ContractModel> GetUserContracts(string userId)
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
                    cmd.Parameters.Add(new SqlParameter("@UserId", userId));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        contract = new ContractModel();
                        contract.Id = Convert.ToInt32(dr["ContractId"]);
                        contract.Name = Convert.ToString(dr["Name"]);
                       if(!dr.IsDBNull(dr.GetOrdinal("Date")))  contract.Date = Convert.ToDateTime(dr["Date"]);
                       
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

        public List<UserSecurityGroupModel> GetUserSecurityGroups(string userId)
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
                    cmd.Parameters.Add(new SqlParameter("@UserId", userId));
                    SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.Default);
                    while (dr.Read())
                    {
                        securityGroup = new UserSecurityGroupModel();
                        securityGroup.DepartmentId= Convert.ToInt32(dr["DepartmentId"]);
                        securityGroup.SecurityGroup = new SecurityGroupModel();
                        securityGroup.SecurityGroup.Id= Convert.ToInt32(dr["SecurityId"]);
                        securityGroup.SecurityGroup.Name = Convert.ToString(dr["Name"]);
                        securityGroup.SecurityGroup.Description = Convert.ToString(dr["Description"]);
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

        public bool SetTrainingStatus(string userId, int trainingId, string status, int completion)
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
                    cmd.Parameters.Add(new SqlParameter("@UserId", userId));
                    cmd.Parameters.Add(new SqlParameter("@TrainingId", trainingId));
                    cmd.Parameters.Add(new SqlParameter("@Status", status));
                    cmd.Parameters.Add(new SqlParameter("@Completion", completion));
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

        public bool SignContract(string userId, int contractId, bool sign)
        {
            bool result = false;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString))
                {
                    conn.Open();
                    string sqlStr = "SignContract";
                    SqlCommand cmd = new SqlCommand(sqlStr, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Clear();
                    cmd.Parameters.Add(new SqlParameter("@UserId", userId));
                    cmd.Parameters.Add(new SqlParameter("@ContractId", contractId));
                    cmd.Parameters.Add(new SqlParameter("@Sign", sign));
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

        public bool SetSecurityGroup(int departmentId, int securityId)
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
                    cmd.Parameters.Add(new SqlParameter("@SecurityId", securityId));
                    cmd.Parameters.Add(new SqlParameter("@DepartmentId", departmentId));
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
}