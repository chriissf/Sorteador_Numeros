// Função principal para sortear números
function sortear() {
    // Recuperar valores dos inputs do HTML
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de > ate) {
        alert('O numero inicial tem que ser maior que o final');
        reiniciar();
        alterarStatusBotao();

    } else {
        // Array para armazenar números sorteados
        let sorteados = [];

        // Variável para armazenar o número sorteado em cada iteração
        let numero;

        // Loop para gerar os números sorteados
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);

            // Verifica se o número já foi sorteado anteriormente
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }

            sorteados.push(numero);
        }


        // Exibir os números sorteados no HTML
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números Sorteados ${sorteados}</label>`;

        // Atualiza o status do botão de reinício
        alterarStatusBotao();
    }
}
// Função para gerar número aleatório entre min e max (inclusive)
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para alterar o status do botão de reinício
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    // Verifica se o botão está habilitado através da classe CSS
    if (botao.classList.contains('container__botao-desabilitado')) {
        // Remove a classe de desabilitado e adiciona a classe habilitada
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        // Remove a classe habilitada e adiciona a classe desabilitada
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Função para reiniciar o jogo
function reiniciar() {
    // Limpa os campos de entrada
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    // Reinicia o texto de resultado para indicar nenhum número sorteado
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    // Atualiza o status do botão de reinício
    alterarStatusBotao();
}
