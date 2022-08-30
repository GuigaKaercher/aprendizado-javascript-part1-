//coleção dinamica de pares chave/valor 
const produto  = new Object
produto.nome = 'cadeira'
produto.marcadoproduto = 'generica'
produto.preco = 320 

delete produto.preco
console.log(produto)

//const carro = new Object OU 

const carro = {
    modelo: 'A4',
    valor: 89000 , 
    prorietario: {
        nome:'GUIGA' ,
        idade:56 ,
        endereço: {
            logradouro: 'rua abc' ,
            numero: 23
        }
    },
    condutores: [{
        nome: 'junior' , 
        idade:20
    }, {
         nome:'ana',
         idade:19
    }],
    calcularvalorseguro: function(){
        //....
    }

}

carro.prorietario.endereço.numero =1000
delete carro.calcularvalorseguro 
console.log(carro)