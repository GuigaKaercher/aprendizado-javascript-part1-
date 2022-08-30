//estrategia um para gerar valor padrao 
function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c    
}

console.log(soma1(3,4,6))

//valor padrao ecma 2015( o certo )
 function soma2 (a = 1 ,b = 1 , c = 1) {
    return a + b + c
 }
 console.log(soma2()),soma2(3),soma2(1,2,3),soma2(0,0,0)