const pessoa = {
saudação: 'bom dia',
falar() {
    console.log(this.saudação)
}
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito de paradgimas:funcional  e 00








const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()

