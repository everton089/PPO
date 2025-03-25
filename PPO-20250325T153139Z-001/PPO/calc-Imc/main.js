const calcular = document.getElementById("calcular")
const limpar = document.querySelector("#limpar")

    const imc = () => {
        const nome = document.getElementById("nome").value
        const peso = document.getElementById("peso").value
        const altura = document.getElementById("altura").value
        const  resultado = document.getElementById("resultado")

            if(nome !== "" && altura!=="" && peso !==""){

                const valorImc = (peso / (altura * altura)).toFixed(2)
                let classificar

                if(valorImc < 18.5){
                    classificar = "abaixo do peso ideal"

                }else if(valorImc <= 25){
                    classificar = "no peso ideal"

                }else if(valorImc <=30){
                    classificar = "um pou acima do peso ideal"

                }else if(valorImc<=35){
                    classificar = "obesidade grau I"

                }else if(valorImc<=40){
                    classificar = "obesidade grau II"
                    
                }else{
                    classificar = "obesidade grau III"

                }
                
                resultado.textContent = `${nome}  você tem um IMC de  ${valorImc} e está ${classificar}`
            }else{
                resultado.textContent = "insira todas as informações !!!!!"
            }
    }

    const clear= () => {

    if(nome !== "" && altura!=="" && peso !==""){ 
    nome.value=""
    altura.value=""
    peso.value=""
    resultado.textContent = ""
    }else{
        alert ("nao e possivel limpar agora!!")
    }

    }

    calcular.addEventListener("click", imc)
    limpar.addEventListener("click", clear)