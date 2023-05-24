const escolhaSetor = document.getElementById('setor');
const prod = document.getElementById('prod');

escolhaSetor.addEventListener('change', function() {
    const selectedSetor = escolhaSetor.value;

    prod.innerHTML = ''; // Limpar as opções existentes antes de adicionar novas

    if (selectedSetor === 'friamb') {

        addOption(prod, 'prodPeito', 'Peito de peru');
        addOption(prod, 'prodPresunto', 'Presunto');
        addOption(prod, 'prodPate', 'Pate');
        addOption(prod, 'prodSalame', 'Salame');

    } else if (selectedSetor === 'laticinios') {

        addOption(prod, 'produtoMussarela', 'Mussarela');
        addOption(prod, 'produtoQueijoPrato', 'Queijo prato');
        addOption(prod, 'produtoRicota', 'Ricota');
        addOption(prod, 'produtoManteiga', 'Manteiga');

    } else if (selectedSetor === 'padaria') {

        addOption(prod, 'produtoPao', 'Pão Frances');
        addOption(prod, 'produtoIntegral', 'Pão integral');
        addOption(prod, 'produtoFolhado', 'Folhado');
        addOption(prod, 'produtoPaoDeQueijo', 'Pão de queijo');

    } else if (selectedSetor === 'caixa') {
        
        addOption(prod, 'produtoHalls', 'Halls');
        addOption(prod, 'produtoPirulito', 'Pirulito');
        addOption(prod, 'produtoChocolate', 'Chocolate');
        addOption(prod, 'produtoChiclete', 'Chiclete');
    }
});

function addOption(selectElement, value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.text = text;
    selectElement.appendChild(option);
}