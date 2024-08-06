function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        msg.innerText += ('\nBom dia.\n')
        window.document.body.style.background = "#e2cd9f"
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        msg.innerText += ('\nBoa tarde.\n')
        window.document.body.style.background = "#ae493d"
    }else{
        msg.innerText += ('\nBoa noite.\n')
        img.src = 'imagens/noite.png'
        window.document.body.style.background = "#192d50"
    }
}