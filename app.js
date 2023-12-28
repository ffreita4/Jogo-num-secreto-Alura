let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//função para trocar os textos da tela
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Troca de Textos da página
function mensagemInicial(){
exibirTextoNaTela('h1', 'Bem Vindo ao Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

//função para limpar o campo do numero digitado
function limparChute() {
    let limpa = document.querySelector('input');
        limpa.value = '';
}

//função para ativar qdo cliar no botão chute
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let textoTentativas = (tentativas > 1 ? 'tentativas' : 'tentativa');
        exibirTextoNaTela('h1', 'ACERTOU !!!');
        exibirTextoNaTela('p', 'Para acertar Vc fez '+tentativas+' ' + textoTentativas);
        //alterei o hmtl e coloqueoi o nome da fucnao como "limpa). Agora chamo a linha pelo ID e apago o atribute "disabled""
        document.getElementById ('reiniciar').removeAttribute('disabled');
        //adicionei ao botão chutar o atributo'disable' que desliga ele
        document.getElementById('chutar').setAttribute('disabled',true);

        
        
        
    }
    else if (chute > numeroSecreto){
        exibirTextoNaTela('h1', 'Tente Novamente !');
        exibirTextoNaTela('p', 'O numero secreto é menor!');
        limparChute();
    }
    else {
        exibirTextoNaTela('h1', 'Tente Novamente !');
        exibirTextoNaTela('p', 'O numero secreto é maior!');
        limparChute();

    }
          
    tentativas++

}

//reiniciar o Jogo
function limpa() {
    mensagemInicial()
    limparChute();
    numeroSecreto= gerarNumeroAleatorio();
    console.log('numero Aleatório = ' + numeroSecreto);
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
    //removo do botão chutar o atributo que desligava ele... agora ele liga
    document.getElementById('chutar').removeAttribute('disabled');


} 


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
console.log('numero Aleatório = ' + numeroSecreto)











