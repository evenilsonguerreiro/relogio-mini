function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagens')
    let res = document.querySelector('#res')
    let sec = document.querySelector('#sec')

    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `<strong>Agora são ${hora} horas</strong>`
    if(hora > 0 && hora <12){
        res.innerHTML = 'BOM DIA'
        img.src = './image/imagem-manha-2.png'
        document.body.style.backgroundColor = 'darkgoldenrod'
    }else if(hora > 12 && hora < 18){
        res.innerHTML = 'BOA TARDE'
        img.src = './image/imagem-tarde.png'
        document.body.style.backgroundColor = 'darkkhaki'
    }else {
        res.innerHTML = 'BOA NOITE'
        img.src = './image/imagem-noite.png'
        document.body.style.backgroundColor = 'black'
        
    }
}