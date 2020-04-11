function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
   
    
    msg.innerHTML= `Agora são, ${horas} horas`
    
    
    

    if(horas >= 4 && horas < 12) {
        img.src='fotomanha.png.png'
        document.body.style.background = 'yellow'
    } else if(horas >= 12 && horas <= 18){
        img.src='fototarde.png.jpg'
        document.body.style.background = 'red'

    } else {
        img.src='fotonoite.png.jpg'
        document.body.style.background = 'black'
    }



}