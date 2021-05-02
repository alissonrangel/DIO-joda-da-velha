var jogador, vencedor = null;

var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function escolherQuadrado(id) {

    if ( vencedor !== null){
        return;
    }

    var quadrado = document.getElementById(id);

    var item = document.getElementById(id).children[0];

    if (item.innerHTML !== '-' ){
        return;
    }

    item.innerHTML = jogador;    

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
}