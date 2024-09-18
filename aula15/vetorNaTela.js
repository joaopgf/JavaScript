let valores = [5, 8, 9, 7, 2, 11]

/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
*/
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}

console.log(valores.indexOf(14));