const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const lamp = document.getElementById("lamp");

function isbreaker(){    
 return lamp.src.indexOf("quebrada") > -1
}

function turnOn (){
    if(!isbreaker () ){
    lamp.src = "assets/ligada.jpg"
}
}

function turnOff(){
   if(!isbreaker () ){
    lamp.src = "assets/desligada.jpg"
   }
}

function breaker(){
    lamp.src = "assets/quebrada.jpg"
}

ligar.addEventListener("click", turnOn);
desligar.addEventListener("click", turnOff);
lamp.addEventListener("mouseover", turnOn)
lamp.addEventListener("mouseleave", turnOff)
lamp.addEventListener("dblclick", breaker)