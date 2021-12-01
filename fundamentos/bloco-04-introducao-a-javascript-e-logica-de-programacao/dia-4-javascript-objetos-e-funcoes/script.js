let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
//Ex1
  console.log('Bem-vinda, ' + info.personagem)

//Ex2
  info.recorrente = 'Sim'

// Ex3
  for (let index in info) {
  console.log(index, info[index])
}
// Ex4
    for (let i in info) {
        console.log(info[i])
    }

// Ex5
let infoTwo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

console.log(info.personagem + ' e ' + infoTwo.personagem)
console.log(info.origem + ' e ' + infoTwo.origem)
console.log(info.nota + ' e ' + infoTwo.nota)
if (info.recorrente && infoTwo.recorrente === 'Sim') {
    console.log('Ambos são recorrentes!')
} else if (info.recorrente && infoTwo.recorrente === 'Não') {
    console.log('Ambos não são recorrentes!')
} else if (info.recorrente === 'Sim' && infoTwo.recorrente === 'Não') {
    console.log('Apenas ' + info.personagem + ' é recorrente!')
} else if (info.recorrente === 'Não' && infoTwo.recorrente === 'Sim') {
    console.log('Apenas ' + infoTwo.personagem + ' é recorrente!')
}
//Fim
