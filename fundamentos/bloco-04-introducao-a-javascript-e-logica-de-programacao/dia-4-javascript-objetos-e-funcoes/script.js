let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' + info.personagem)

  info.recorrente = 'Sim'

  for (let index in info) {
  console.log(index, info[index])
  }

  for (let i in info) {
      console.log(info[i])
  }