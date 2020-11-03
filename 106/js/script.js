function addTodo(){
    var text = $("#todoText").val();
    $("#todoText").val('');

    var li = "<li> "+text+ "</li>" ;
    $(".pendingList").append(li);

    $("#todoText").focus();
}


function init(){

    $(".buttonfx").click(addTodo);

}


//var input = document.getElementById("todoText");
//input.value="hello there";//
 
//$("#todoText").val("Hello There!");



window.onload= init;