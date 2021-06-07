function confirmar() {
    var lar = document.getElementById('largura')
    var alt = document.getElementById('altura')
    let largura = Number(lar.value) 
    let altura = Number(alt.value)
    var metros = (altura*largura)
    var msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    msg.innerHTML = `A área total é de ${metros}M² e será necessário ${metros/4}L de tinta para pinta-la.`
    img.src="imagens/icone02.png"
}