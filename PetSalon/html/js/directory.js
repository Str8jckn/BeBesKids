console.log("directory");

function display(){
    var pets= salon.pets
    const petSection= document.getElementById("pets");
    var text="";
    var icon="";
    var dogIcon='<i class="fas fa-dog"></i>';
    var catIcon='<i class="fas fa-cat"></i>';
    var birdIcon='<i class="fas fa-crow"></i>';
    
    for(var i=0;i<pets.length;i++){
        
        if(pets[i].type==="Dog"){
            icon= dogIcon;
        }else if(pets[i].type==="Cat"){
            icon=catIcon;
        }else if(pets[i].type==="bird"){
            icon=birdIcon;
        }else{
            icon='<i class="fas fa-question-circle"></i>';
        }
        
    
        //long string//
        text+=`
        <div id="${pets.id} class="pet">
         ${icon}
            <h2> Name:${pets[i].name} </h2> 
            <p> Age: ${pets[i].age} </p> 
            <p> type: ${pets[i].type} </p>
            <p> Breed: ${pets[i].breed} </p>
            <p> Gender: ${pets[i].gender} </p>
            <p> Service: ${pets[i].service} </p>
            <p>Price: $ ${pets[i].price} <p>
            <p>shots: ${pets[i].shots} <p>
            <p> Owner: ${pets[i].owner} </p>
            <p> Contact: ${pets[i].contact} </p>
          
        </div>
        `;   
        
    }

    petSection.innerHTML=text;

}


display();


   

