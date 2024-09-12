function pegarTarefa() {
    const nomeTarefa = document.getElementById("inputTarefa")

    if (nomeTarefa.value != "") {
        const listaTarefa = document.getElementById("listaTarefas")

        const li = document.createElement('li');
        li.textContent = nomeTarefa.value;

        const labelConcluido = document.createElement('label');
        labelConcluido.textContent = "| Concluido?"
        labelConcluido.classList.add("labelConcluido");
        const checkBoxConcluir = document.createElement('input');
        checkBoxConcluir.type = 'checkbox'


        li.appendChild(labelConcluido)
        li.appendChild(checkBoxConcluir)
        li.appendChild(remover(listaTarefa, li));
        listaTarefa.appendChild(li);

        checkBoxConcluir.addEventListener('change', function () {
            if (checkBoxConcluir.checked) {
                li.style.color = 'green';
            } else {
                li.style.color = '';
            }
        });
    } else {
        alert("Não pode adicionar uma tarefa vazia")
    }
    nomeTarefa.value=""
}

function remover(listaTarefa, li) {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('btn-Remover');
    botaoRemover.addEventListener('click', () => {
        listaTarefa.removeChild(li);
    })
    return botaoRemover;
}

function removerTodasConcluidas(){
    const listaTarefa = document.getElementById("listaTarefas")
    const itensLista = listaTarefa.querySelectorAll('li');
    for (const item of itensLista) {
        if (item.querySelector('input').checked) {
            listaTarefa.removeChild(item);
        }
    }
}