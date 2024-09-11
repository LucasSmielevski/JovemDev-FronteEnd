//Operadores lógicos

let a = true
let b = false

let c = "1"
let d = 1

console.log(a == b)
console.log(a === b)
console.log(c == d)
console.log(c === d)

// console.log(a && b)
// console.log(a || b)
// console.log(!a)
// console.log(!b)

//Operadores unários

let numero  = 10
let negativo = -numero
console.log(negativo)

let verdadeiro = true
console.log(!verdadeiro)

let contador = 0
contador ++ 
console.log(contador)

contador --
console.log(contador)

let text = "texto"
let numero2 = 12.6
let falso = false
// console.log(typeof text)
// console.log(typeof numero2)
// console.log(typeof false)

//Operadores ternários
const idade = 17
let podeDirigir = idade >= 18 ? "pode" : "não pode"
// console.log(`Ele ${podeDirigir} dirigir`)