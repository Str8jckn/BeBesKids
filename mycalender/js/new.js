$(document).ready(function(){
    // Add task event
    $('#add-task-form').on('submit', function(e){
        addTask(e);
    });

    // Edit task form even
    $('#edit-task-form').on('submit', function(e){
        updateTask(e);
    });

    //Remove tasks
    $('#task-table').on('click', '#remove-task', function(){
        id = $(this).data('id');
        removeTask(id);
    });

    // Clear tasks
    $('#clear-tasks').on('click', function(){
        clearAllTasks();
    })

    displayTasks();

    //Function to display tasks from local storage
    function displayTasks() {
        var taskList = JSON.parse(localStorage.getItem('tasks'));

        // Sort tasks
        if(taskList != null) {
            taskList = taskList.sort(sortByTime);
        }

        // Set counter
        var i = 0;
        //Check tasks
        if(localStorage.getItem('tasks') != null) {
            // loop and display
            $.each(taskList, function(key, value){
                $('#task-table').append('<tr id="' + value.id + '">' +
                                            '<td>' + value.task + '</td>' +
                                            '<td>' + value.taskPriority + '</td>' +
                                            '<td>' + value.taskDate + '</td>' + 
                                            '<td>' + value.taskTime + '</td>' +
                                            '<td> <a href="edit.html?id='+ value.id+'">Edit</a> | <a href="#" id="remove-task" data-id="'+ value.id +'">Remove</a></td>' +
                                        '</tr>');
            })
        }
    }

    //Sort tasks by time
    function sortByTime(a, b) {
        var aTime = a.taskTime;
        var bTime = b.taskTime;
        return ((aTime < bTime) ? -1 : ((aTime > bTime) ? 1 : 0))
    }

    // Function to add a task
    function addTask(e){
        
        //Add unique ID
        var newDate = new Date();
        id = newDate.getTime();

        var task = $('#task').val();
        var taskPriority = $('#priority').val();
        var taskDate = $('#date').val();
        var taskTime = $('#time').val()

        // Simple validation
        if(task == ''){
            alert('Please enter a task'); 
            e.preventDefault();
        } else if(taskPriority == '') {
            taskPriority = 'normal'; 
            e.preventDefault();
        } else if(taskDate == '') {
            alert('Please select a date'); 
            e.preventDefault();
        } else if(taskTime == '') {
            alert('Please enter a time'); 
            e.preventDefault();
        } else {

            // Create LS variable
            tasks = JSON.parse(localStorage.getItem('tasks'));

            // Check local storage for tasks, if empty, create the array container
            if(tasks == null) {
                tasks = [];
            }
            // Reassign tasks to taskList
            var taskList = JSON.parse(localStorage.getItem('tasks'));
            var newTask = {
                'id': id,
                'task': task,
                'taskPriority': taskPriority,
                'taskDate': taskDate,
                'taskTime': taskTime
            }

            tasks.push(newTask)
            localStorage.setItem('tasks', JSON.stringify(tasks));

            console.log('task added')
        }
    }

    function updateTask(e){
        var id = $('#task_id').val();
        var task = $('#task').val();
        var taskPriority = $('#priority').val();
        var taskDate = $('#date').val();
        var taskTime = $('#time').val();

        // Create LS variable
        tasks = JSON.parse(localStorage.getItem('tasks'));

        for(var i=0; i<tasks.length; i++){
            if(tasks[i].id == id){
                tasks.splice(i,1)
            }
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        // Simple validation
        if(task == ''){
            alert('Please enter a task'); 
            e.preventDefault();
        } else if(taskPriority == '') {
            taskPriority = 'normal'; 
            e.preventDefault();
        } else if(taskDate == '') {
            alert('Please select a date'); 
            e.preventDefault();
        } else if(taskTime == '') {
            alert('Please enter a time'); 
            e.preventDefault();
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));

            // Check local storage for tasks, if empty, create the array container
            if(tasks == null) {
                tasks = [];
            }
            // Reassign tasks to taskList
            var taskList = JSON.parse(localStorage.getItem('tasks'));

            //New task object
            var newTask = {
                'id': id,
                'task': task,
                'taskPriority': taskPriority,
                'taskDate': taskDate,
                'taskTime': taskTime
            }

            tasks.push(newTask)
            localStorage.setItem('tasks', JSON.stringify(tasks));

        }
    }

    // Remove task function
    function removeTask(id){
        if(confirm('Are you sure')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            for(var i=0; i<tasks.length; i++){
                if(tasks[i].id == id){
                    tasks.splice(i,1)
                }
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }

            location.reload();
        }
    };

    // Function clear all tasks
    function clearAllTasks(){
        if(confirm('Are you sure? This can\'t be undone')){
            localStorage.clear();
            location.reload();
        }
    }
});

// Function to  get single task for edit
function getTasks(){
    var $_GET = getQueryParams(document.location.search);
    id = $_GET['id'];

    var taskList = JSON.parse(localStorage.getItem('tasks'));

    for(var i = 0; i < taskList.length; i++){
        if(taskList[i].id == id){
            $('#edit-task-form #task_id').val(taskList[i].id);
            $('#edit-task-form #task').val(taskList[i].task);
            $('#edit-task-form #priority').val(taskList[i].taskPriority);
            $('#edit-task-form #date').val(taskList[i].taskDate);
            $('#edit-task-form #time').val(taskList[i].taskTime);
        }
    }
}

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

    while(tokens = re.exec(qs)){
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}