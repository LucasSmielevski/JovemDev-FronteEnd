const formularioTarefa = document.getElementById('formTarefa');
const btnLimparConcluidas = document.getElementById('btnLimparConcluidas');
const listaTarefas = document.getElementById('listaTarefas');
const contadorPendentes = document.getElementById('contadorPendentes');
const contadorConcluidos = document.getElementById('contadorConcluidos');

let tarefas = [];

function atualizarContadores() {
    const pendentes = tarefas.filter(tarefa => !tarefa.concluida).length;
    const concluidas = tarefas.filter(tarefa => tarefa.concluida).length;
    contadorPendentes.textContent = `Pendentes: ${pendentes}`;
    contadorConcluidos.textContent = `Concluídas: ${concluidas}`;
}

function renderizarTarefas() {
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        if (tarefa.concluida) {
            li.classList.add('completed');
        }
        li.textContent = tarefa.texto;
        li.appendChild(criarCheckboxConcluir(li, index));
        li.appendChild(criarBotaoRemover(index));
        listaTarefas.appendChild(li);
    });
    atualizarContadores();
}

function criarBotaoRemover(index) {
    const botaoRemover = document.createElement('button');
    
    const iconeRemover = document.createElement('i');
    iconeRemover.classList.add('fa-regular', 'fa-trash-can');
    
    botaoRemover.appendChild(iconeRemover)
    botaoRemover.classList.add('btn-Remover');
    botaoRemover.addEventListener('click', () => {
        tarefas.splice(index, 1);
        renderizarTarefas();
    });
    return botaoRemover;
}

function criarCheckboxConcluir(li, index) {
    const checkBoxConcluir = document.createElement('input');
    checkBoxConcluir.type = 'checkbox';
    checkBoxConcluir.classList.add('checkboxConcluir');
    checkBoxConcluir.addEventListener('change', function () {
        tarefas[index].concluida = checkBoxConcluir.checked;
        if(checkBoxConcluir.checked){
            li.style.background = 'green';
        }
        else{
            li.style.background = '';
        }
        atualizarContadores();
    });
    return checkBoxConcluir;
}

function pegarTarefa(event) {
    event.preventDefault();
    const inputTarefa = document.getElementById('inputTarefa');
    const nomeTarefa = inputTarefa.value.trim();
    if (nomeTarefa === "") {
        alert("Não pode adicionar uma tarefa vazia");
        return;
    }
    
    let tarefa = {
        texto: nomeTarefa, 
        concluida: false
    }

    tarefas.push(tarefa);
    renderizarTarefas();
    inputTarefa.value = "";
}

function removerTodasConcluidas() {
    tarefas = tarefas.filter(tarefa => !tarefa.concluida);
    renderizarTarefas();
}

formularioTarefa.addEventListener('submit', pegarTarefa);
btnLimparConcluidas.addEventListener('click', removerTodasConcluidas);

renderizarTarefas();
