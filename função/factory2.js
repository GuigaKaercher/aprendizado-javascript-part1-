function criarproduto(nome,preço) {
    return {
        nome,
        preço,
        desconto: 0.2
    }
}
console.log(criarproduto("celular",1.999,00)) 