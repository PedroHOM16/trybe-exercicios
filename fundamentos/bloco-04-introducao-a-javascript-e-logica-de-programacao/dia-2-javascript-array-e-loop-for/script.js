let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log('Exercício 1:', numbers)
let somaTotal = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]
console.log('Exercício 2:', somaTotal)
let mediaAritmetica = somaTotal / numbers.length
console.log('Exercício 3:', mediaAritmetica)
if (mediaAritmetica > 20) {
    console.log('Exercício 4: Média maior que 20!')
} else {
    console.log('Exercício 4: Média menor ou igual a 20')
}
let maiorNumero = 0
for (let i = 0; i < numbers.length; i += 1) {    
    if (numbers[i] > maiorNumero ) {
        maiorNumero = numbers[i]
    } 
}
console.log('Exercício 5: O maior número da lista é' , maiorNumero)
let quantidadeImpar = 0
for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        quantidadeImpar += 1
    }    
}
if (quantidadeImpar !== 0) {
    console.log("Exercício 6: Quantidade de números ímpar:", quantidadeImpar)
} else {
    console.log("Exercício 6: Não há nenhum número ímpar!")
}

let menorNumero = 10 ** 100000000
for(i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menorNumero) {
        menorNumero = numbers[i]
    }
}
console.log('exercício 7: O menor número da lista é', menorNumero)