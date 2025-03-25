const formatar = (digito) => `0${digito}`.slice(-2)

const atualizar =( tempo ) =>{
    const segundos = document.getElementById("segundos")
    const minutos = document.getElementById("minutos")
    const  horas= document.getElementById("horas")
    const  dias = document.getElementById("dias")
    
    const qtSeg = tempo % 60
    const qtMin = Math.floor((tempo % (60 * 60)) / 60);    
    const qtHora=  Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtDias= Math.floor(tempo / (60 * 60 * 24));
  

    segundos.textContent = formatar(qtSeg);
    minutos.textContent = formatar(qtMin);
    horas.textContent = formatar(qtHora);
    dias.textContent = formatar(qtDias);


}

const contagemRegressiva = (tempo) => {

    const paraContagem = () => {
        clearInterval(intevalId)
    }

    const contar = () => {
        if(tempo === 0){
            paraContagem()
        }
        atualizar(tempo)
        tempo--
}

    let intevalId = setInterval(contar, 1000)
}

const tempoRestante = () =>{
    const data = new Date ("2025-03-29 20:00:00");
    const hoje = Date.now();

    return Math.floor((data-hoje)/1000)
}
contagemRegressiva(tempoRestante())