export type AccountHolder = {
    id: number
    name: string
    cpf: string
    birthDate: string
    balance: number
    bankStatement: Bill[]
}

export type Bill = {
    value: number
    description: string
    paymentDate: string
}
