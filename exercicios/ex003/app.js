function contar() {
    var ini = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br/>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <=0) {
            window.alert('Passe inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for( var c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉`
        }
        res.innerHTML += `🏴`
        } else {
            //contagem regressiva
            for ( var c = i; c >= f; c -= p){
                res.innerHTML += `${c} 👉`
            }
            res.innerHTML += `🏴`
        }
        
    }
}