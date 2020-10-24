

const Pet=document.getElementById("Pet");
var h1=document.createElement("h1");

var text=document.createTextNode("Hello World");

h1.appendChild(text);

pets.appendChild(h1);
var div=document.createElement('div');
var text2=document.createTextNode(`${salon.pets[0].name}`);
div.appendChild(text2);
pets.appendChild(div);

var ul=document.createElement('ul');
for (i=0;i<salon.pets.length; i++){
    var li=document.createElement('li');
    var text2=document.createTextNode(`${salon.pets[i].name}`);
    li.appendChild(text2);
    ul.appendChild(ul);
    pets.appendChild(li);
}
pets.appendChild(ul);
