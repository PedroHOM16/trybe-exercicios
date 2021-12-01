//Ex1
 function verificaPalindromo(palavra) {
     let palavraAoContrario = ''
    for (let i = palavra.length - 1; i >= 0; i -= 1){
        palavraAoContrario += palavra[i]
    }
    let resultado;
    if (palavra === palavraAoContrario){
        resultado = true
    } else {
        resultado = false
    }
    console.log(resultado)
 } 

 //verificaPalindromo('arara')

 //Ex2
 function maiorNumero(numeros) {
     let maiorNumeroDoArray = 0
     numeros = [numeros]
     for (let i = 0; i < numeros.length; i += 1) {
        if (numeros[i] > maiorNumeroDoArray) {
            maiorNumeroDoArray = numeros[i]
        }
     }
     console.log(maiorNumeroDoArray)
 }

 maiorNumero(1, 2, 54, 16, 100, 87, 500, 21, 3, 501)