function contagem(){
    var txinicio = window.document.getElementById('txtinicio')
    var txfim = window.document.getElementById('txtfim')
    var txpasso = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')
    var dad = window.document.getElementById('dad')
    res.innerText = ''
    if (txinicio.value.length == 0 || txfim.value.length == 0 || txpasso.value.length == 0){
        window.alert('[ERRO] Faltam dados!!!')
    } else {
        var i = Number(txinicio.value)
        var f = Number(txfim.value)
        var p = Number(txpasso.value)
        if (i == f && p != 1) {
            window.alert(`VALORES INVÁLIDOS!\n`)
        } else {
            if (p == 0) {
                res.innerHTML = 'O passo será considerado 1 (um) !'
                p = 1
            }
            dad.innerHTML = `Contando...`
            if (i <= f) {
                for(var a = i; a <= f; a += p){
                    res.innerText += `\n${a}`
                }
            }else{
                for(var a = i; a >= f; a -= p){
                    res.innerText += `\n${a}`
                }
            } 
        }
    }
}
