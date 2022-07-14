import connection from "./connection"

const criarTabelaFuncionarios = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Funcionarios (
            id BIGINT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            );
        `)

        console.log("Tabela Funcionarios criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Funcionarios.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaFuncionarios() {
    try {
        await connection.raw(`
            INSERT INTO Funcionarios (id, name, email)
            VALUES 
            (001, "Luana", "lua@lbn.com"),
            (002, "Vinicius", "vini@lbn.com"),
            (003, "Laura", "lau@lbn.com"),
        `)

        console.log("Tabela Funcionarios populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela Funcionarios.")
        console.log(error.sqlMessage)
    }
}

criarTabelaFuncionarios()
    .then(() => popularTabelaFuncionarios())
    .finally(() => process.exit())
