const escolhaSetor = document.getElementById('setor');
const prod = document.getElementById('prod');
const quantidadeElemento = document.getElementById('quantidade');
const adicionarButton = document.getElementById('adicionar');
const removerButton = document.getElementById('remover');

escolhaSetor.addEventListener('change', function() {
    const setor = escolhaSetor.ariaValueMax;
    atualizarOpcoesProduto(produto);
});

prod.addEventListener('change', function() {
    const produto = prod.value;
    exibirQuantidadeEstoque(produto);
})

adicionarButton.addEventListener('click', function() {
    const quantidade = parseInt(quantidadeElement.innerText);
    atualizarQuantidadeEstoque(quantidade + 1);
});

removerButton.addEventListener('click', function() {
    const quantidade = parseInt(quantidadeElement.innerText);
    if (quantidade > 0) {
        atualizarQuantidadeEstoque(quantidade - 1);
    }
});

function atualizarOpcoesProduto(setor) {

    if(setor === friamb, laticinios, padaria, caixa) {
        document.write('Escolha seu produto');
    }
    // Lógica para atualizar as opções de produto com base no setor selecionado
    
}

function exibirQuantidadeEstoque(prod) {
    
    if(prod == 0) {
        document.write('Realizar reposição do produto')
    }
    // Lógica para obter a quantidade em estoque do produto selecionado e exibir no elemento quantidadeElement
    // ...
}

function atualizarQuantidadeEstoque(quantidade) {
    quantidadeElement.innerText = quantidade;
}