const soma = function (x,y) {
    return x + y

}

const imprimirresultado = function (a,b,operação = soma){

    console.log(operação(a,b))
}
imprimirresultado(3,4)
imprimirresultado(3,4,soma)
imprimirresultado(10,10,(x,y) => x * y) 
imprimirresultado(12,4,(x,y) => x/y)
