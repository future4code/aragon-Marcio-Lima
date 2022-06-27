const listaDeTarefas = ["fazer as compras", "lavar a louça", ]
const novaTarefa = process.argv[2]

const novaListaDeTarefas = () => {
    listaDeTarefas.push(novaTarefa)
    return `Tarefa adicionada com sucesso!, Tarefas: ${listaDeTarefas}` 
}

console.log(novaListaDeTarefas())