const imprimirresultado =function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9: 
        console.log("quadro de honra")
        break
        
        case 8: case 7:
         console.log("aprovado")
        break
        
        case 6: case 5: case 4:
            console.log("recuperação")
            break
        
            case 3: case 2: case 1:
            ("reprovado")
            break
        
            default:
            console.log("valor invalido")
    }
}

imprimirresultado(10)
imprimirresultado(8)
imprimirresultado(5)
imprimirresultado(0)
