// console.warn(soma)
// console.error(soma)


const a = 40
const b = 5
const c = 2

var divisao = (a + b)/c

console.log(divisao.toFixed(2))

//---------------- 07------------

var nomeAula = "Aula"
var nomeFrontend = "Frontend"
console.log(`${nomeAula} de ${nomeFrontend}`)
console.log(nomeAula.substring(0,2))

//--------------Function--------------
console.log("--------------Function--------------")

function printString(texto){
    console.log(texto)
}

var fPrintTexto = () => {
    return "Hello world"
}

printString("AAAAA")
console.log(fPrintTexto())

var fCalculo = (a,b,c) => {
    var divisao = (a + b)/c
    console.log(divisao.toFixed(2))
}

var fConcatenarString = (string1, string2) => {
    return `${string1} de ${string2}`
}

var fPegarLetras = (string1, string2) => {
    return string1.substring(0,2)
}

fCalculo(40,5,2)
console.log(fConcatenarString("Aula", "FrontEnd"))
console.log(fPegarLetras("Aula"))