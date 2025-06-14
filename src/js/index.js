// OBJETIVO 1 - criar  a funcionalidade de filtrar as cartas

// PASSO 1 - pegar o botaõ de aplicar filtros do HTML e mandar para o js

const botaoFiltrar = document.querySelector(".btn-filtrar");

// PASSO 2 - escutar o clique no botão de aplicar filtros

botaoFiltrar.addEventListener('click', function () {
    // PASSO 3 - pegar os valores dos campos de categoria e preço

    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;

    // PASSO 4- verificar se cada carta deve ser mostrada ou escondida de acordo com o filtro selecionado.

    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;

        let mostrarCarta = true;

        console.log('a categoria selecionada foi:', categoriaSelecionada)

        const temFiltroDeCategoria = categoriaSelecionada !== '';

        const CartaNaoBateComFiltroCategoria =
            categoriaSelecionada.toLowerCase() !==
            categoriaCarta.toLowerCase();

        if (temFiltroDeCategoria && CartaNaoBateComFiltroCategoria) {
            mostrarCarta = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComFiltroDeprecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

        if (temFiltroDePreco && cartaNaoBateComFiltroDeprecoMaximo) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');

        } else {
            carta.classList.remove('mostrar')
            carta.classList.add('esconder')
        }

    });
});