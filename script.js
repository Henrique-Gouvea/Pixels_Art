// let h1 = document.createElement('h1');
// h1.id = 'title';
// h1.innerText = 'Paleta de Cores';
// let bodyPrinc = document.querySelector('body');
// bodyPrinc.appendChild(h1);

const inputValor = document.createElement('input');
const divButton = document.getElementById('divButton');
inputValor.type = 'number';
inputValor.id = 'board-size';
inputValor.min = '1';
divButton.appendChild(inputValor);

const black = document.getElementById('color-black').style.backgroundColor = 'black';
const gray = document.getElementById('color-gray').style.backgroundColor = gerar_cor();
gold = document.getElementById('color-gold').style.backgroundColor = gerar_cor();
yellow = document.getElementById('color-yellow').style.backgroundColor = gerar_cor();

function criaQuadro(tamanho) {
  tamanho *= tamanho;
  const line1 = document.getElementById('pixel-board');
  for (let i = 0; i < tamanho; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    line1.appendChild(div);
  }
}

function regraTres(valorEntrada) {
  const regraTres = (210 * valorEntrada) / 5;
  document.getElementById('pixel-board').style.width = `${regraTres}px`;
  return valorEntrada;
}

criaQuadro(regraTres('5'));

function selected() {
  document.getElementById('color-black').className = 'color';
  document.getElementById('color-gray').className = 'color';
  document.getElementById('color-gold').className = 'color';
  document.getElementById('color-yellow').className = 'color';
  if (event.target.id != 'color-palette' && event.target.className != 'color selected') {
    event.target.className = 'color selected';
  }
}
const cor = document.getElementById('color-palette');
cor.addEventListener('click', selected);

function changeColor() {
  const colorSelect = document.getElementsByClassName('color selected');
  // console.log(colorSelect[0].style.backgroundColor);
  event.target.style.backgroundColor = colorSelect[0].style.backgroundColor;
}

const pixelSelect = document.getElementById('pixel-board');
pixelSelect.addEventListener('click', changeColor);

function createButton(text, ident, dadId) {
  const button = document.createElement('button');
  button.innerText = text;
  button.id = ident;
  const divButton = document.getElementById(dadId);
  divButton.appendChild(button);
}
createButton('Limpar', 'clear-board', 'divButton');

function clearPixels() {
  const pixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
const clear = document.getElementById('clear-board');
clear.addEventListener('click', clearPixels);

// function newColor(){
//     let gray = document.getElementById('color-gray').style.backgroundColor = gerar_cor();
//     let gold = document.getElementById('color-gold').style.backgroundColor = gerar_cor();
//     let yellow = document.getElementById('color-yellow').style.backgroundColor = gerar_cor();
// }

// newColor();

function gerar_cor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b})`;
}// funcao gerar_cor pego pronto do link : https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript, ele usa o math.random para gerar um numero aleatorio, e multiplica por 255 para limita-lo de 0 a 255;

createButton('VQV', 'generate-board', 'divButton');

function buttonInput() {
  const inputValue = document.getElementById('board-size').value;
  if (inputValue > 0) {
    document.getElementById('pixel-board').innerText = '';
    criaQuadro(regraTres(menorMaior(inputValue)));
  } else {
    alert('Board inválido!');
  }
}

document.getElementById('generate-board').addEventListener('click', buttonInput);

function menorMaior(valor) {
  if (valor < 5) {
    return '5';
  }
  if (valor > 50) {
    return '50';
  }

  return valor;
}
