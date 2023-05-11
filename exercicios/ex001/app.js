function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ` Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = "imagens/pexels-gareth-davies-910411.jpg"
        document.body.style.background = '#EBD674'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = "imagens/pexels-anderson-martins-2386144.jpg"
        document.body.style.background = '#F38101' 
    }else {
        //Boa Noite!
        img.src = "imagens/pexels-neale-lasalle-631477.jpg"
        document.body.style.background = '#002543'
    }
}


