const img = document.getElementById("img")
const buttons = document.getElementById("buttons")
let indexcor = 0
let idInterval

function stopAuto(){
    clearInterval( idInterval )
}
function proxcor(){
    indexcor = indexcor < 2 ? ++indexcor: 0;
}

function troca(){
        const cores=["vermelho","amarelo","verde"];
        const cor = cores[indexcor];
        turnOn[cor]();
        proxcor();
}

function traffic( event ){
    stopAuto();
    turnOn[event.target.id]();
     
}

const turnOn ={
    "desligar": ()=> img.src = "assets/desligado.jpg",
    "vermelho": ()=>  img.src = "assets/vermelho.jpg",
    "amarelo": ()=>  img.src = "assets/amarelo.jpg",
    "verde": ()=>  img.src = "assets/verde.jpg",
    "automatico": ()=> idInterval = setInterval(troca, 1500)
}

buttons.addEventListener("click", traffic)