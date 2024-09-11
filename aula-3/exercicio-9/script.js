var fazerMedia = (somaNotas) => {
    const media = somaNotas / listaNotas.length
    return `${media}`

}

var situacaoAluno = (media) => {
    let aprovadoOuReprovado = media >= 7 ? "Aprovado" : "Reprovado"
    return `${aprovadoOuReprovado}`
}

const quantidadeAlunos = prompt("Quanto alunos tem na sala")
const listaAlunos = []
const listaNotas = []

for (let index = 0; index < quantidadeAlunos; index++) {
    let nome = prompt("Digite o nome do aluno")
    const quantidadeNotas = prompt(`Quantas notas o aluno ${nome} possui?`)
    for (let num = 0; num < quantidadeNotas; num++) {
        let notas = prompt(`Digite a nota ${num + 1}`)
        listaNotas.push(Number(notas))
    }
    const soma = listaNotas.reduce((acumulador, elemento) => acumulador + elemento, 0)

    const media = fazerMedia(soma)

    let aluno = {
        nome: nome,
        notas: listaNotas,
        media: media,
        situacao: situacaoAluno(media)
    }
    listaAlunos.push(aluno);
}

const alunosAprovados = listaAlunos.filter(item => item.situacao == "Aprovado")
const alunosReprovados = listaAlunos.filter(item => item.situacao == "Reprovado")

alunosAprovados.forEach(alunosA => {
    console.log(`Alunos aprovados: ${alunosA.nome} com média: ${alunosA.media}`)
})

alunosReprovados.forEach(alunosR => {
    console.log(`Alunos reprovados: ${alunosR.nome} com média: ${alunosR.media}`)
})