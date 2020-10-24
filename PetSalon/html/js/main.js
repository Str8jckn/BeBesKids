var salon={
    name:"The Fashion Pet",
    address:{
        street:"560 State St.",
        number:"281-330-8004"
    },
    hours:{
        open:"8:00 a.m.",
        close:"8:00 p.m."
    },
    pets:[]/* {name:'Scooby'},
    {name:'Bugs'}, 
    { name:'Raphael'},
    {name:"Daffy"} */

}

text=`
    ${salon.name}, ${salon.address.street} ${salon.address.number}
<br>
It is open from ${salon.hours.open} to ${salon.hours.close}
`;
document.getElementById('footer-info').innerHTML=text;

document.write(salon.pets)

//var id=0;

class Pet{
    constructor(name,age,gender,type,breed,service,price,shots,ownersName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.type=type;
        this.breed=breed;
        this.service=service;
        this.price=price;
        this.shots=shots;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
        //this.id=id++;
    }
}

var scooby = new Pet ("Scooby", 50,"Male","Dog","Dane", "Full Service",20,"yes","Shaggy","800-867-5309");
var bugs = new Pet ("Bugs", 90,"Female","Rabbit","Bunny", "Hair Fluff",10, "no", "Mel Blanc","345-555-1930");
var raphael = new Pet ("Raphael", 36,"Male","Turtle","Ninja", "Turtle Wax",8, "yes", "Splinter","800-111-1984");
var daffy = new Pet ("Daffy", 83,"Male","Duck","Dane", "shampoo,Grooming",5,"yes", "Shaggy","800-867-1937");
salon.pets.push(scooby);
salon.pets.push(bugs);
salon.pets.push(raphael);
salon.pets.push(daffy);


const txtName= document.getElementById('petName');
const txtAge= document.getElementById('petAge');
const txtGender= document.getElementById('petGender');
const txtType= document.getElementById('petType');
const txtBreed= document.getElementById('petBreed');
const txtService= document.getElementById('petService');
const txtPrice= document.getElementById('servicePrice');
const txtShots= document.getElementById('shots');
const txtownersName= document.getElementById('ownersName');
const txtcontactPhone= document.getElementById('contactPhone');

function register(){
var thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtType.value,txtBreed.value,txtService.value,txtPrice.value,txtShots.value,txtownersName.value,txtcontactPhone.value);
salon.pets.push(thePet);
display(thePet);
clear();
registeredPets();
profitCalculation();

}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value= ""; 
    txtType.value="";
    txtBreed.value="";
    txtService.value="";
    txtPrice.value="";
    txtShots.value="";
    txtownersName.value="";
    txtcontactPhone.value="";
}

function registeredPets(){
    document.getElementById('registeredPets').innerHTML=` Number of Pets: ${salon.pets.length}`;
}

/*function deletePet(petId){
      for (ar i=0;i<salon.pets.length;i++){
        if(salon.pets[i].id===petId){
            indexDelete=i;}
        }
        salon.pets.splice(indexDelete,1);
            $('#' +petId).remove();
} 
*/
function search(){
    
}

function profitCalculation(){
    var total=0;
    for(var i=0;i<salon.pets.length;i++){
    total=total + Number(salon.pets[i].price);
    }
    document.getElementById('profits').
    innerHTML=`Profits: $ ${total}`;

}

profitCalculation();

