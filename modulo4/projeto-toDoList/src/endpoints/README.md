# Projeto To Do List

O escopo do projeto consiste em desenvolver um sistema de registro de tarefas e usuários simplificado (aqui denominado "To do list").

## Funcionalidades do projeto

O sistema contará com recursos que envolvem o gerenciamento de cadastro de usuários e também de cadastro de tarefas.

Cada usuário será representado pelas seguintes informações:

-   Id do usuário.
-   Nome do usuário.
-   Apelido (nickname) do usuário.
-   E-mail do usuário.

Cada tarefa será representada pelas seguintes informações:

-   Id da tarefa.
-   Título da tarefa.
-   Descrição da tarefa.
-   Prazo de vencimento da tarefa.
-   Status de execução da tarefa, que pode alternar entre 3 valores distintos: ”A FAZER”, “FAZENDO” e “FEITO”.
-   Id do usuário que criou a tarefa.

## Autor

-   [@Marcio Lima](https://github.com/MarcioLima79)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DB_HOST = ""`

`DB_USER = "nome_do_usuario"`

`DB_PASSWORD = "senha_do_usuario"`

`DB_DATABASE = "nome_da_database"`

## Documentação da API

### Endpoints:

#### 1. Retorna a lista de usuários (com ou sem busca por nome ou apelido).

```http
  GET /users
```

| Parâmetros       | Tipo     | Descrição                                               |
| :--------------- | :------- | :------------------------------------------------------ |
| `name, nickname` | `string` | **Opcional:** variável de busca “search” (query params) |

#### 2. Retorna a lista de tarefas (com ou sem busca por título ou descrição).

```http
  GET /tasks
```

| Parâmetros           | Tipo     | Descrição                                               |
| :------------------- | :------- | :------------------------------------------------------ |
| `title, description` | `string` | **Opcional:** variável de busca “search” (query params) |

#### 3. Retorna um usuário responsável por uma tarefa

```http
  GET /tasks/:taskId/users
```

| Parâmetros | Tipo     | Descrição                                       |
| :--------- | :------- | :---------------------------------------------- |
| `taskId`   | `string` | **Obrigatório:** variável de rota (path params) |

#### 4. Adiciona usuário a uma tarefa

```http
  POST /tasks/:taskId/users
```

| Parâmetros       | Tipo     | Descrição                                                      |
| :--------------- | :------- | :------------------------------------------------------------- |
| `taskId, userId` | `string` | **Obrigatório:** variável de rota (path params) e corpo (body) |

#### 5. Edita o apelido de um usuário por seu id

```http
  PUT /users/:userId
```

| Parâmetros         | Tipo     | Descrição                                                      |
| :----------------- | :------- | :------------------------------------------------------------- |
| `userId, nickname` | `string` | **Obrigatório:** variável de rota (path params) e corpo (body) |

#### 6. Edita o status de uma tarefa

```http
  PUT /tasks/:taskId
```

| Parâmetros | Tipo     | Descrição                                                                   |
| :--------- | :------- | :-------------------------------------------------------------------------- |
| `taskId`   | `string` | **Obrigatório:** variável de rota (path params) e enum (TO_DO, DOING, DONE) |

#### 7. Deleta uma tarefa por seu id

```http
  DELETE /tasks/:taskId
```

| Parâmetros | Tipo     | Descrição                                       |
| :--------- | :------- | :---------------------------------------------- |
| `taskId`   | `string` | **Obrigatório:** variável de rota (path params) |

## Observação:

A partir do endpoint 4 começou a aparecer o seguinte erro, não consegui identificar quais foram minhas falhas no código.

## Screenshots

![App Screenshot](https://i.ibb.co/b6Z5LvP/Endpoint-4.png)
![App Screenshot](https://i.ibb.co/Qr6ChtN/Endpoint-5.png)
![App Screenshot](https://i.ibb.co/sRVx89K/Endpoint-6.png)

## Stack utilizada

-   NodeJS
-   TypeScript
-   SQL
-   Knex
-   Express
-   Cors

## Programas utilizados

-   VSCode
-   BeeKeeper
-   Postman
