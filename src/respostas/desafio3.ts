// Desafio 3:
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement;
let soma = document.getElementById('soma')as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = "0";

function somarAoSaldo(soma: number) {
    campoSaldo.innerHTML = String(parseFloat(campoSaldo.innerHTML)) + soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

if (botaoAtualizar && soma){
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}

botaoLimpar.addEventListener('click', function () {
    limparSaldo()});
