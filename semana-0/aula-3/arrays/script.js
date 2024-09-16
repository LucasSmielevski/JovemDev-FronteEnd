const lista = [1,2,3,4,5]

console.log(lista)
lista.push(6)
console.log(lista)
lista.unshift(0)
console.log(lista)
lista.pop()
console.log(lista)
lista.shift()
console.log(lista)

const obj = {id: 4}
const lista2 = [{id : 1}, {id: 2}, {id: 3}, obj]

// console.log(lista2.find(item => item.id == 2)) //find
// console.log(lista2.findIndex (item => item.id == 3)) //findIndex
// console.log(lista2.indexOf(obj)) //indexOf
// console.log(lista2.some(item => item.id == 1)) //some
// console.log(lista2.every(item => item.id == 1)) //every
// console.log(lista2.includes(obj)) //includes

const lista3 = [{id : 1, ativo: true}, {id: 2, ativo: true}, {id: 3, ativo: false}]

// console.log(lista3.filter(item => item.ativo == true)) //filter


for (let index = 0; index < 10; index++) {
    // console.log(index)
}

for(const item of lista2){
    // console.log(item)
}

for(const index in lista3){
    // console.log(index, lista3[index])
}

lista3.forEach(item => {
    // console.log(item)
})

let count = 0
while (count < 10) {
    count++
    // console.log(count)
}

// const meuInput = prompt("Este é meu input");
// console.log(meuInput)

//Objects

let pessoa = {
    id : 1,
    nome : "Lucas",
    idade : 20,
    saudacoes: () => {
        console.log(`Olá meu nome é ${pessoa.nome}`)
    }
}

pessoa.saudacoes()

let carro = new Object();
carro.placa = "minha placa"
carro.marca = "peugeot"
console.log(carro)