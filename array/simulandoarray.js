const quasearray = {0: 'rafael' , 1:'ana' , 2:'bia'}
console.log(quasearray)
Object.defineProperties(quasearray, 'tostring' , {
    value : function() { return Object.values(this) },
    enumerable : false

})

console.log(quasearray[0])
const meuarray = ['rafael' , 'ana' , 'bia']
//console.log(quasearray.)