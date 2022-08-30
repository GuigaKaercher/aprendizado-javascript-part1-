const pessoa = {
nome:'ana' , 
idade:5, 
endereco:{
    lagradouro:'rua abc',
    numero:100
}

}
const {nome,idade} =pessoa
console.log(nome,idade)

const {nome:n,idade:i}=pessoa
console.log(n,i)

const {sobrenome,bla=true}=pessoa
console.log(sobrenome,bla)

const{endereco:{lagradouro,numero,cep}}=pessoa
console.log(lagradouro,numero,cep)
