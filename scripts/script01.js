function confirmar() {
    
    var quilometro = document.getElementById('km')
    var km = Number(quilometro.value)
    var msg = document.getElementById('msg')
    var acima = km-80
    var img = document.getElementById('imagem')

    if (km == 0) {
        alert('Apresente um valor Valido!')
    }
    else if (km <= 80){
        msg.innerHTML = `Sua velocidade é de ${km}km/h. Você está dentro do limite. Pode prosseguir viagem!`
        img.src="imagens/ok01.png"
    }
    else if (km > 350) {
        alert('Esse valor está fora dos padrões. Tente novamente! ')
    }
    else {
        msg.innerHTML = `Sua velocidade é de ${km}Km/h e Você foi multado! O valor da multa é de R$ ${acima*7},00 Reais.`
        img.src="imagens/stop01.png"
    }
}