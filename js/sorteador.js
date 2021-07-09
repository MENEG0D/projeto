const submeterformulario = () => {
    const rangeinicial = document.getElementById("rangeinicial").value;
    const rangefinal = document.getElementById("rangefinal").value;
    const minhaaposta = document.getElementById("minhaaposta").value;

     realizarsorteio (+rangeinicial, +rangefinal, +minhaaposta);

}
const realizarsorteio = (rangeinicial, rangefinal, minhaaposta) => {

    if(!rangeinicial){
        alert('Informe o range Inicial');
        return;
    }

    if(!rangefinal){
        alert('Informe o range final');
        return;
    }

    if(!minhaaposta){
        alert('Informe sua Aposta');
     return;
    }

    const numerosorteado = novosorteio(rangeinicial, rangefinal);
    if(numerosorteado === minhaaposta) {
        alert('Parabens Voce Acertou');
        return;

    }
    alert(`errou o número sorteado foi ${numerosorteado}`);

}

const novosorteio = (rangeinicial, rangefinal) => {
        return (Math.floor(Math.random() 
        * (rangefinal - rangeinicial + 1))
        + rangeinicial);
}