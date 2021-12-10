// let h1 = document.createElement('h1');
// h1.id = 'title';
// h1.innerText = 'Paleta de Cores';
// let bodyPrinc = document.querySelector('body');
// bodyPrinc.appendChild(h1);
let black = document.getElementById('color-black').style.backgroundColor = 'black'
let gray = document.getElementById('color-gray').style.backgroundColor = gerar_cor();
gold = document.getElementById('color-gold').style.backgroundColor = gerar_cor();
yellow = document.getElementById('color-yellow').style.backgroundColor = gerar_cor();

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

function selected() {
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

function changeColor() {
    let colorSelect = document.getElementsByClassName('color selected');
    //console.log(colorSelect[0].style.backgroundColor);
    event.target.style.backgroundColor = colorSelect[0].style.backgroundColor;
}

let pixelSelect = document.getElementById("pixel-board");
pixelSelect.addEventListener('click', changeColor);

function createButton(){
    let button = document.createElement("button");
    button.innerText = 'Limpar';
    button.id = 'clear-board';
    let divButton = document.getElementById('divButton');
    divButton.appendChild(button);
}
createButton();

function clearPixels(){
    let pixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixel.length; i += 1){
        pixel[i].style.backgroundColor = 'white';
    }
}
let clear = document.getElementById("clear-board");
clear.addEventListener('click', clearPixels);

// function newColor(){
//     let gray = document.getElementById('color-gray').style.backgroundColor = gerar_cor();
//     let gold = document.getElementById('color-gold').style.backgroundColor = gerar_cor();
//     let yellow = document.getElementById('color-yellow').style.backgroundColor = gerar_cor();
// }

// newColor();

function gerar_cor() { 
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    return `rgb(${r}, ${g}, ${b})`;
 }//funcao gerar_cor pego pronto do link : https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript, ele usa o math.random para gerar um numero aleatorio, e multiplica por 255 para limita-lo de 0 a 255;