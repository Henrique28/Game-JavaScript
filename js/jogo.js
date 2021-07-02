
var largura = 0
var altura = 0
var vidas = 1
var tempo = 10
var tempoJogo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')


if(nivel === 'facil'){

    tempoJogo = 1500

}else if(nivel === 'normal'){  

    tempoJogo = 1000

}else if (nivel === 'dificil'){
    tempoJogo = 750
}

console.log("Aqui esta" + tempoJogo)


function ajusteTamanho() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}

ajusteTamanho()

var cronometro = setInterval(function(){   
    
    tempo--
    
    if(tempo < 0){ 
        window.location.href = "GameWinner.html"
    }else{
        document.getElementById('tempoRestante').innerHTML = tempo 
    }   
}, 1000)


function posicao() {

    //impedir que mais de um mosquito seja criado 

    var testeId = document.getElementById('mosca') 
    
    if (testeId){
        testeId.remove()

        if(vidas > 3){
            window.location.href = 'GameOver.html'         
        } else {
            document.getElementById('c' + vidas).src = "imagens/coracao_vazio.png"
            vidas++ 
        }
        
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
    mosca.onclick = function(){
        this.remove()
    }   


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








