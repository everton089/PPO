const display = document.getElementById("display") 
const numeros = document.querySelectorAll("[id  *= tecla]")
const opradores = document.querySelectorAll("[id  *= operador]")

let novoNum =  true
let operador;
let antNum

const opPendente = () => operador !== undefined;

const calc = () => {
    const numeroAtual = parseFloat(display.textContent.replace(",","."))
    novoNum =true   
    if(opPendente()){
        if(operador == "+"){
            atualizarDisplay(antNum + numeroAtual)
        }else if(operador == "-"){
            atualizarDisplay(antNum - numeroAtual)
        }else if(operador == "*"){
            atualizarDisplay(antNum * numeroAtual)
        }else if(operador == "/"){
            atualizarDisplay(antNum / numeroAtual)
        }
    }
}

const atualizarDisplay = (texto) => {
    if(novoNum == true){
        display.textContent = texto
        novoNum = false
    }else{
        display.textContent += texto
    }
}

const inserirNum = (evento) => atualizarDisplay(evento.target.textContent);

const selcOpe = (evento) => { 
    if(!novoNum == true){
    calc()
    novoNum = true
    operador = evento.target.textContent
    antNum = parseFloat(display.textContent.replace(",","."))
   
}
}
const igual = () =>{
    calc();
}

const limparDisplay = () =>{
    display.textContent = "";
}
const limparcalc = () =>{
    limparDisplay()
    novoNum = true
    operador = undefined
    antNum = undefined
}
const removerultimoNum = () =>{
    display.textContent = display.textContent.slice(0,-1)
}
const inverter = () => {
    novoNum = true
    atualizarDisplay(display.textContent * -1)
}
const existeDecimal = () => {
    display.textContent.indexOf(",") !== -1
}

const decimal = () =>{
    if(!existeDecimal()){
        if( display.textContent.length > 0){
            atualizarDisplay(",")
         
        }else{
           atualizarDisplay("0,")
           
        }
    }
}
numeros.forEach(numero => numero.addEventListener("click", inserirNum))
opradores.forEach(operador => operador.addEventListener("click", selcOpe))
document.getElementById("igual").addEventListener("click", igual)
document.getElementById("limparDisplay").addEventListener("click", limparDisplay)
document.getElementById("limparCalculo").addEventListener("click", limparcalc)
document.getElementById("backspace").addEventListener("click", removerultimoNum)
document.getElementById("inverter").addEventListener("click", inverter)
document.getElementById("decimal").addEventListener("click", decimal)

const mapaTeclado = {
    0: 'tecla0',
    1: 'tecla1',
    2: 'tecla2',
    3: 'tecla3',
    4: 'tecla4',
    5: 'tecla5',
    6: 'tecla6',
    7: 'tecla7',
    8: 'tecla8',
    9: 'tecla9',
    '/': 'operadorDividir',
    '*': 'operadorMultiplicar',
    '-': 'operadorSubtrair',
    '+': 'operadorAdicionar',
    '=': 'igual',
    Enter: 'igual',
    Backspace: 'backspace',
    c: 'limparDisplay',
    Escape: 'limparCalculo',
    ',': 'decimal',
};

const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click();
};
document.addEventListener('keydown', mapearTeclado);