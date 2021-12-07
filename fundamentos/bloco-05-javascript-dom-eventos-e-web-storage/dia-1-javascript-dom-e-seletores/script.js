
  /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

 2 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

 3 Crie uma função que mude a cor do quadrado vermelho para branco.

 4 Crie uma função que corrija o texto da tag <h1>.

 5 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

 6 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


//exercicio 1

function mudarTexto(texto) {
    let novoTexto = document.getElementsByTagName("p");
    novoTexto[1].innerText = texto;
}

mudarTexto('Ser reconhecido como desenvolvedor WEB em uma grande empresa. E aprender sempre')

//exercicio 2

function mudaCorQuadradoMaior(cor) {
    let caixaMaior = document.querySelector('.main-content');
    caixaMaior.style.backgroundColor = cor;
    return caixaMaior;
    }
mudaCorQuadradoMaior("rgb(76,164,109)")

//exercicio 3

function mudaCorQuadradoMenor(cor) {
    let caixaMenor = document.querySelector('.main-content .center-content');
    caixaMenor.style.backgroundColor = cor;
    return caixaMenor;
}
mudaCorQuadradoMenor('white')

//exercicio 4
function correcao(texto) {
    let textoCorreto = document.getElementsByClassName('title');
    textoCorreto[0].innerText = texto
    return textoCorreto;
}

correcao('Exercício 5.1 - JavaScript')

//exercicio 5
