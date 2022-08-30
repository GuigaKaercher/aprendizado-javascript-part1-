const produto = Object.preventExtensions({
    nome: 'qualquer' , preco: 1.99 , tag: 'promoção'
})
console.log('extensivel:', Object.isExtensible(produto))
produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

const pessoa = { nome: 'julia' , idade:39}
Object.seal(pessoa)
console.log('selado:',Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
pessoa.idade = 29
delete pessoa.nome
console.log(pessoa)

//freeze
