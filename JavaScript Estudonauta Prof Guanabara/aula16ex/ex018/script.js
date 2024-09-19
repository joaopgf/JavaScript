let num = window.document.querySelector('#fnum');
let lista = window.document.querySelector('#flista');
let res = window.document.querySelector('#res');
let valores = [];

function isNumero(n){
    if(n >= 1 && n <=100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado !`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
    window.alert('Valor inválido ou já está na lista !')
    }
    num.value = ''
    num.focus()
} 

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores para finalizar !')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            if(valores[pos] > maior){
                maior = valores[pos]
            }

            if(valores[pos < menor]){
                menor = valores[pos]
            }

            soma += valores[pos]
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados !</p>`
        res.innerHTML += `<p>O maior valor foi ${maior} !</p>`
        res.innerHTML += `<p>O menor valor foi ${menor} !</p>`
        res.innerHTML += `<p>A soma de todos os valores foi: ${soma} !</p>`
        res.innerHTML += `<p>A média dos valores foi ${media} !</p>`
    }
}