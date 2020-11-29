using Microsoft.AspNetCore.Mvc;
using Assignment1.Models;
using System.Linq;

namespace Assignment1.Controllers

{
public class ApiController : Controller
{ 
    private DataContext dbContext;

    public ApiController(DataContext db)
    {
        this.dbContext = db;
    }



    [HttpPost]
    
    public IActionResult SaveTask ([FromBody] Task theTask)
    {

        dbContext.Tasks.Add(theTask);
        dbContext.SaveChanges();


        return Json(theTask); 

    }

    [HttpGet]

    public IActionResult GetTasks()
    {
        var allTasks = dbContext.Tasks.ToList();
        
        return Json(allTasks);

       /* var list = new List<Task>();

        var myTask = new Task();
        myTask.Title = "Hardcoded";
        myTask.Description = "This is a test task";
        myTask.Location = "Backend";
        myTask.Important = true;
        myTask.User = "Jerome";

        list.Add(myTask);

        return Json(list);*/
    }

    public IActionResult Test()
        {
            return Content ("Yoooo World");
        }

    
}

}





