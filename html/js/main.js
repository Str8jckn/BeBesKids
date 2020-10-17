var salon={
    Name:"The Fashion Pet",
    address:{
        street:"",
        number:""
    },
    hours:{
        open:"8:00 a.m.",
        close:"8:00 p.m."
    },
    pets:[
        {name:"Scooby"},
        {name:"Bugs"}, 
        { name:"Raphael"},
        {name:"Daffy"} 
    ]

}

text=`
    ${salon.name} ${salon.address.street} ${salon.address.number}
<br>
It is open from ${salon.hours.open} to ${salon.hours.close}
`;
document.getElementById('footer-info').innerHTML=text;

document.write(salon.pets)


/*class Pet{
    constructor(name,age,gender,type,breed,service,ownersName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.type=type;
        this.breed=breed;
        this.service=service;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
    }
}

var scooby = new Pet ("Scooby", 50,"Male","Dog","Dane", "Full Service", "Shaggy","800-867-5309");
var bugs = new Pet ("Bugs", 90,"Female","Rabbit","Bunny", "Hair Fluff", "Mel Blanc","345-555-1930");
var raphael = new Pet ("Raphael", 36,"Male","Turtle","Ninja", "Turtle Wax", "Splinter","800-111-1984");
var daffy = new Pet ("Daffy", 83,"Male","Dog","Dane", "shampoo,Grooming", "Shaggy","800-867-1937");


salon.pets.push(scooby);
salon.pets.push(bugs);
salon.pets.push(raphael);
salon.pets.push(daffy);
const txtName= document.getElementById('petName');
const txtAge= document.getElementById('petAge');
const txtGender= document.getElementById('petGender');
const txtType= document.getElementById('petType');
const txtBreed= document.getElementById('petBreed');
const txtService= document.getElementById('Service');
const txtownersName= document.getElementById('ownersName');
const txtcontactPhone= document.getElementById('contactPhone');

function register(){
var thePet = new Pet (txtName.value,txtAge.value,txtGender.value,txtType.value,txtBreed.value,txtService.value,txtownersName.value,txtcontactPhone.value)
salon.pets.push(thePet);
document.write(salon.pets);
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value= ""; 
    txtType.value="";
    txtBreed.value="";
    txtService.value="";
    txtownersName.value="";
    txtcontactPhone.value="";
}
*/