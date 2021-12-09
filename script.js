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
