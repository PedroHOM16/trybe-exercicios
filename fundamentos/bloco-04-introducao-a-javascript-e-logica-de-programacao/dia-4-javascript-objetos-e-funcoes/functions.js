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

 verificaPalindromo('arara')