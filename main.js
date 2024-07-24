const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent= tamanhoSenha;

const botoes = document.querySelector('.parametro-senha__botao')

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentoTamanho;

function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha-1;
    numeroSenha.textContent= tamanhoSenha;
}
function aumentoTamanho(){
    tamanhoSenha = tamanhoSenha +1;
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);