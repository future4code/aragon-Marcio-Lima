// Exercício 2:
export type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const toDos: ToDo[] = [
    {
        userId: 1,
        id: 1,
        title: "Studying",
        completed: false
    },
    {
        userId: 2,
        id: 2,
        title: "Do the shopping",
        completed: true
    },
    {
        userId: 3,
        id: 3,
        title: "Clean the house",
        completed: false
    },
    {
        userId: 4,
        id: 4,
        title: "Do the dishes",
        completed: true
    }
]