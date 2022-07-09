import { AccountHolder } from "./types"

export const customers: AccountHolder[] = [
    {
        id: 1,
        name: "Márcio Lima",
        cpf: "000.000.000-00",
        birthDate: "06/01/1979",
        balance: 1000,
        bankStatement: [
            {
                value: 300,
                description: "fatura do cartão de crédito",
                paymentDate: "01/07/2022",
            },
        ],
    },
    {
        id: 2,
        name: "Roberta Xavier",
        cpf: "111.111.111-11",
        birthDate: "16/06/1985",
        balance: 1100,
        bankStatement: [
            {
                value: 8,
                description: "estacionamento",
                paymentDate: "29/07/2022",
            },
        ],
    },
    {
        id: 3,
        name: "Aline Vignoli",
        cpf: "222.222.222-22",
        birthDate: "20/01/1988",
        balance: 3500,
        bankStatement: [
            {
                value: 200,
                description: "equipamentos de tatuagem",
                paymentDate: "06/06/2022",
            },
        ],
    },
    {
        id: 4,
        name: "Betina Vignoli",
        cpf: "333.333.333-33",
        birthDate: "06/01/1979",
        balance: 350,
        bankStatement: [
            {
                value: 20,
                description: "quinquilharias da Shopee",
                paymentDate: "06/07/2022",
            },
        ],
    },
    {
        id: 5,
        name: "Carmen Jussara",
        cpf: "444.444.444-44",
        birthDate: "27/07/2054",
        balance: 2300,
        bankStatement: [
            {
                value: 260,
                description: "conta de luz",
                paymentDate: "18/07/2022",
            },
        ],
    },
    {
        id: 6,
        name: "Ricardo Paganini",
        cpf: "666.666.666-66",
        birthDate: "20/06/1962",
        balance: 3000,
        bankStatement: [
            {
                value: 690,
                description: "manutenção do carro",
                paymentDate: "06/01/2020",
            },
        ],
    },
]
