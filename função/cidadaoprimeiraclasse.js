//função de modo literal 

function fun() {}

//armazenar uma variavel 
const fun2 = function () {}

//armazenar em uma array 

const array = [function (a,b){return a + b}, fun,fun2]
console.log(array[0](7,7))

//armazenar atributo de objeto

const obj = {}
obj.falar =function () {return"opa"}
console.log =(obj.falar ())

//passar função c parametro 

function run (fun) {
fun()
}

//uma função retornando uma função 

function soma (a,b) {
    return function(c) {
        console.log(a + b + c)

    }
}
 soma(2,3) (5)
