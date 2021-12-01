let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//Ex6

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' é: ' + leitor.livrosFavoritos[0].titulo + '.')
//Ex7
  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  })
//Ex8
  console.log(leitor.nome + ' possui ' + leitor.livrosFavoritos.length + ' livros favoritos!')