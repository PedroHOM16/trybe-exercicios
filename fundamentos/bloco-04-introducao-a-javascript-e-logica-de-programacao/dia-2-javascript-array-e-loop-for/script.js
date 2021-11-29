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
