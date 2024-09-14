function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('#txtano')
    var res = window.document.querySelector('#res')

    if (fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados inseridos !')
    } else {
        var idade = ano - Number(fano.value)
        var fsex = window.document.getElementsByName('radsex')
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebehp.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemhp.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/homemp.jpg')
            } else{
                img.setAttribute('src', 'imagens/idosop.jpg')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebemp.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemmp.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/mulherp.jpg')
            } else{
                img.setAttribute('src', 'imagens/idosap.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} com idade de ${idade} anos.`)
        res.appendChild(img)
    }
}