function verificar() {
    var nome = window.document.getElementById("nome").value
    var sexo = window.document.getElementsByName("radsex")
    var peso = Number(window.document.getElementById("peso").value)
    var altura = Number(window.document.getElementById("altura").value)
    var resposta = window.document.getElementById("resultado")
    var pesoIdeal = 0
    //calcular peso ideal e mostrar na tela
    if(sexo[0].checked){
        pesoIdeal = pesoIdeal = (72.7 * altura) - 58
        pesoIdeal = parseInt(pesoIdeal)
    }else{
        pesoIdeal = pesoIdeal = (62.1 * altura) - 44.7
        pesoIdeal = parseInt(pesoIdeal)
    }

    if(peso < pesoIdeal){
        resposta.innerHTML = `Olá, ${nome}. o seu peso ideal é <strong>${pesoIdeal.toFixed(2)}kg</strong> e, portanto, você está <strong>abaixo do peso</strong>.`
    }else if(peso > pesoIdeal){
        resposta.innerHTML = `Olá, ${nome}. O seu peso ideal é <strong>${pesoIdeal.toFixed(2)}kg</strong> e, portanto, você está <strong>acima do peso</strong>.`
    }else{
        resposta.innerHTML = `Olá, ${nome}. Parabéns, você está <strong>dentro do seu peso</strong> ideal, que é <strong>${pesoIdeal.toFixed(2)}</strong>kg.`
    }

}


//O QUE VAI DEFINIR SE ELA ESTÁ ABAIXO OU ACIMA DO PESO?
//ABAIXO DO PESO: peso < pesoIdeal
//ACIMA DO PESO: peso > pesoIdeal
//PESO ADEQUADO: peso == pesoIdeal
