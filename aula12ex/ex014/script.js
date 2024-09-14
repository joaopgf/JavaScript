function carregar (){
    var msg = window.document.querySelector('#msg');
    var imagem = window.document.querySelector('#imagem');
    var data = new Date();
    //var hora = data.getHours();
    var hora = 1;
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora < 12){
        imagem.src = 'imagens/manhaP.jpg'
        msg.innerHTML += ' Bom dia !';
        window.document.body.style.backgroundColor = '#908E79';
    } else if (hora >=12 && hora < 18){
        imagem.src = 'imagens/tardeP.jpg'
        msg.innerHTML += ' Boa tarde !';
        window.document.body.style.backgroundColor = '#E7C590';
    } else {
        imagem.src = 'imagens/noiteP.jpg'
        msg.innerHTML += ' Boa noite !';
        window.document.body.style.backgroundColor = '#000000';
    }
}
