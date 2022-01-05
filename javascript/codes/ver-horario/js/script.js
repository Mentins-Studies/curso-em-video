function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML = `Agora são: ${hora}hrs`

    if (hora > 00 && hora < 12){
        img.src = "imagens/manha.png"
        document.body.style.background = '#c8997f'

    } else if (hora > 12 && hora < 18){
        img.src = "imagens/tarde.png"
        document.body.style.background = '#d85d23'
        
    } else if (hora >= 18){
        img.src = "imagens/noite.png"
        document.body.style.background = '#332938'
    }
}
