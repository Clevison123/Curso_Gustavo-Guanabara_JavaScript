function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 15) {
                //Criança
                img.setAttribute('src', 'imagens/menino-bebe.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'imagens/adolescente-homem.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else if (idade > 55 ) {
                //Idoso
                img.setAttribute('src', 'imagens/homem-velho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 15) {
                //Criança
                img.setAttribute('src', 'imagens/menina-bebe.png')
            } else if (idade <25 ) {
                //Jovem
                img.setAttribute('src', 'imagens/mulher-adolescente.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else if (idade > 55 ) {
                //Idosa
                img.setAttribute('src', 'imagens/mulher-velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}