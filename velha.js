const cards = document.querySelectorAll('.flipper');
var jogador, vencedor = null;

var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

//var quadrados = document.getElementsByClassName('quadrado');
mudarJogador('X');

function escolherQuadrado(id) {
    console.log('clicou no botão - ' + id);

    if ( vencedor !== null){
        return;
    }

    var quadrado = document.getElementById(id);

    var item = document.getElementById(id).children[0];

    if (item.innerHTML !== '-' ){
        return;
    }

    item.innerHTML = jogador;
    //quadrado.style.color = '#000';

    if ( jogador === 'X'){                
        quadrado.children[2].style.display = 'block';                
        quadrado.style.transform = 'rotateY(180deg)';
    } else {
        quadrado.children[3].style.display = 'block';                        
        quadrado.style.transform = 'rotateY(180deg)';        
    }

    if ( jogador === 'X'){
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    checaVencedor();
    mudarJogador(jogador)
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');
    // var quadrado1 = document.getElementById('one');
    // var quadrado2 = document.getElementById('two');
    // var quadrado3 = document.getElementById('three');
    // var quadrado4 = document.getElementById('four');
    // var quadrado5 = document.getElementById('five');
    // var quadrado6 = document.getElementById('six');
    // var quadrado7 = document.getElementById('seven');
    // var quadrado8 = document.getElementById('eight');
    // var quadrado9 = document.getElementById('nine');

    if (checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudarVencedor(quadrado1);
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);        
        return;
    }
    if (checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudarVencedor(quadrado4);
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);        
        return;
    }
    if (checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudarVencedor(quadrado7);
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);        
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudarVencedor(quadrado1);
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);        
        return;
    }
    if (checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudarVencedor(quadrado2);
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);        
        return;
    }
    if (checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudarVencedor(quadrado3);
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);        
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudarVencedor(quadrado1);
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);        
        return;
    }
    if (checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudarVencedor(quadrado3);
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);        
        return;
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    
    if ( vencedor === 'X'){                
        quadrado1.parentNode.children[4].style.display = 'block';
        quadrado1.parentNode.style.transform = 'rotateY(180deg)';
        quadrado2.parentNode.children[4].style.display = 'block';
        quadrado2.parentNode.style.transform = 'rotateY(180deg)';
        quadrado3.parentNode.children[4].style.display = 'block';
        quadrado3.parentNode.style.transform = 'rotateY(180deg)';
    } else {
        quadrado1.parentNode.children[5].style.display = 'block';
        quadrado1.parentNode.style.transform = 'rotateY(180deg)';
        quadrado2.parentNode.children[5].style.display = 'block';
        quadrado2.parentNode.style.transform = 'rotateY(180deg)';
        quadrado3.parentNode.children[5].style.display = 'block';
        quadrado3.parentNode.style.transform = 'rotateY(180deg)';       
    }
    //quadrado1.parentNode.style.background = '#0f0';
    // quadrado2.style.background = '#0f0';
    // quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false
    if ( quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;        
    }
    return eigual;
}

function reiniciar() {
    document.location.reload(true);
    // vencedor = null;
    // vencedorSelecionado.innerHTML = "";

    // for (let i = 1; i  <= 9; i++) {
    //     var quadrado = document.getElementById(i);
    //     quadrado.style.background = '#eee';
    //     quadrado.style.color = '#eee';
    //     quadrado.innerHTML = '-';
    // }

    // mudarJogador('X');
}

function flipCard() {
    
    this.children[1].style.zindex = '10';

    if ( jogador === 'X'){                
        this.children[1].style.display = 'block';                
        this.style.transform = 'rotateY(180deg)';
    } else {
        this.children[2].style.display = 'block';                        
        this.style.transform = 'rotateY(180deg)';        
    }
    
    
}

/*
cards.forEach((card)=>{
    card.children[1].style.zindex = '1000';
    console.log("One - " + card.children[1].style.zindex);
    console.log("Two - " + card.children[0].style.zindex);
    
    card.addEventListener('click', flipCard);
})
*/