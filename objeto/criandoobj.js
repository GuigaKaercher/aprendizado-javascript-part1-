//usando notação literal 
const obj1 = {}

//object em JS

console.log(typeof Object,typeof new Object)
const obj2 = new Object
console.log(obj2)

//funçoes construtoras 
function produto(nome,preco,desc) {
    this.nome = nome
    this.getprecocomdesconto = () => {
        return preco * (1 - desc )

    }
} 

const p1 = new produto('caneta' , 7.99, 0.15 )
const p2 = new produto('notebook', 1900, 0.25)
console.log(p1.getprecocomdesconto(), p2.getprecocomdesconto() )

//função factory 

function criarfuncionario(nome , salariobase , faltas)  {
    return {
        nome,
        salariobase,
        faltas,
        getsalario(){
            return salariobase/30 * (30 - faltas)

        }
    }
}

const f1 = criarfuncionario('joao',2300,4)
const f2 = criarfuncionario('maria', 3229, 1)
console.log(f1.getsalario(),f2.getsalario())
