



var largura = 0
var altura = 0


function ajusteTamanho() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}

ajusteTamanho()


function posicao() {

    //impedir que mais de um mosquito seja criado 
    
    var testeId = document.getElementById('mosca') 
    
    if (testeId){
        testeId.remove()
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // html

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoMosca()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.style.transform = ladoMosca()
    mosca.id = 'mosca'
    


    document.body.appendChild(mosca)
    
}

function tamanhoMosca(){

    var classe = Math.floor(Math.random() * 3)
    console.log(classe)
    
    switch(classe){
        case 0:
            return 'mosca1'        

        case 1:
            return 'mosca2'       

        case 2:
            return 'mosca3'
         
    }
}

function ladoMosca(){
    var lado = Math.floor(Math.random()*2)
    console.log(lado)

    if(lado == 1){
        return 'scaleX(-1)'
    }  
    
}


