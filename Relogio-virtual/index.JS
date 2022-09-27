function carregar(){
var mensagem = window.document.getElementById('mensagem')
var foto = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
mensagem.innerHTML = `Agora são ${hora} Horas.`
if ( hora >= 0 && hora <= 12 ) {
    //BOM DIA
    foto.src = 'fotodemanhã.jpg'
    document.body.style.background = '#ffe670'
}else if ( hora >= 12 && hora <= 17){
    //BOA TARDE
    foto.src = 'fototarde.jpg'
    document.body.style.background = '#e07a28'
}else {
    //BOA NOITE
    foto.src = 'fotonoite.jpg'
    document.body.style.background = '#081d20'
}







}