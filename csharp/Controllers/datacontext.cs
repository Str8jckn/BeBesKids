using Microsoft.EntityFrameworkCore;

namespace Assignment1.Models
{
        /*
            Run migrations everytime something changes on the models

            - dotnet ef migrations add <someName>
            - dotnet ef database update
        */public class DataContext : DbContext
    {

        public DataContext (DbContextOptions<DataContext> options) : base(options)
        {
        
        }
        public DbSet <Task> Tasks {get; set;} 
        

    }
}