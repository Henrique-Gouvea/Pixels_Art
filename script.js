// let h1 = document.createElement('h1');
// h1.id = 'title';
// h1.innerText = 'Paleta de Cores';
// let bodyPrinc = document.querySelector('body');
// bodyPrinc.appendChild(h1);

function criaQuadro(tamanho) {
    tamanho = tamanho * tamanho;
    let line1 = document.getElementById('pixel-board');
    for(let i = 0; i < tamanho; i += 1) {
        let div = document.createElement('div');
        div.className = 'pixel';
        line1.appendChild(div);
    }
}
criaQuadro('5');

function selected(){
    document.getElementById('color-black').className = 'color';
    document.getElementById('color-gray').className = 'color';
    document.getElementById('color-gold').className = 'color';
    document.getElementById('color-yellow').className = 'color';
    if( event.target.id != "color-palette" && event.target.className != 'color selected'){
        event.target.className = 'color selected';
    }
}
let cor = document.getElementById('color-palette');
cor.addEventListener('click', selected);