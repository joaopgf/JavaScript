function contar(){
    let ini = window.document.querySelector('#txti')
    let fim = window.document.querySelector('#txtf')
    let pas = window.document.querySelector('#txtp')
    let res = window.document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('Estão faltando dados !')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(p <=0){
            window.alert('Passo inválido, considerando 1 !')
            p = 1;
        }
        if(i < f){
            for(let c = i; c <= f; c+=p){
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}