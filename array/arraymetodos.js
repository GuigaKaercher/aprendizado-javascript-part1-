const pilotos= ['vettel' , 'alonso' , 'raikkonen', 'massa']
pilotos.pop() //massa quebrou o carro(remove o ultimo)
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar 
pilotos.splice(2,0 , 'bottas' , 'massa')
console.log(pilotos)

//remover 
pilotos.splice(3,1) //massa dnv
console.log(pilotos)

const algunspilotos = pilotos.slice(2) //novo array(pega do outro)
console.log(algunspilotos)

