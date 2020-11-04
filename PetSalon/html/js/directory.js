
function display(pets){
    var text="";
    
    var dogIcon='<i class="fas fa-dog"></i>';
    var catIcon='<i class="fas fa-cat"></i>';
    var birdIcon='<i class="fas fa-crow"></i>';
    
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
            <h2> Name:${pets.name} </h2> 
            <p> Age: ${pets.age} </p> 
            <p> type: ${pets.type} </p>
            <p> Breed: ${pets.breed} </p>
            <p> Gender: ${pets.gender} </p>
            <p> Service: ${pets.service} </p>
            <p>Price: $ ${pets.price} <p>
            <p>shots: ${pets.shots} <p>
            <p> Owner: ${pets.owner} </p>
            <p> Contact: ${pets.contact} </p>
            <button class=btn btn-danger" onclick='deletePet(${pets.id}) Delete </button>

        </div>
        `;   
    $('#pets').append(text);
}




function displayTable(pets){
    var tr= `

    <tr id="${pets.id}">
         
            <td>${pets.name} </td> 
            <td>  ${pets.age} </td> 
            <td>  ${pets.type} </td>
            <td>  ${pets.breed} </td>
            <td> ${pets.gender} </td>
            <td>  ${pets.service} </td>
            <td> ${pets.price} <td>
            <td>${pets.shots} <td>
            <td>  ${pets.ownersName} </td>
            <td> ${pets.contactPhone} </td>
            <button class=btn btn-danger" onclick='deletePet(${pets.id}) Delete </button>
            </tr>`;
            $('#petTable').append(tr)
            ;
        
}







