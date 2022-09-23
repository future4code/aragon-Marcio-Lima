# Case Amaro Backend

Criação de API para cadastro e consulta de produtos
Você precisa criar uma API com os seguintes requisitos:

O projeto simula a API do loja Amaro, onde o cliente pode realizar seu cadastro, logar, buscar produtos por nome ou ID, caso seja um administrador, também pode criar novos produtos.

---

## Instruções

### Instalando as dependências:

-   `npm install`:
    Instala todas as dependências listadas no `package.json`.

### Criando o arquivo .env:

Criar o arquivo `.env` e configurar com as informações de seu banco de dados.

```
BCRYPT_SALT_ROUNDS = 12
DB_DATABASE = DB
DB_HOST = host
DB_PASSWORD = "password"
DB_USER = user
JWT_EXPIRES_IN = "48h"
JWT_KEY = "password"
PORT = 3003
```

### Populando a tabela:

-   `npm run migrations`
    Popula a tabela com dados de usuários.
    _Esse script deve ser executado apenas uma única vez_

### Executar o projeto:

-   `npm run dev`:
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

---

### Endpoints:

#### SIGNUP

-   Method: `POST`
-   Path: `/users/signup`
-   Input: `name(string), email(string), password(string)`
-   Output: `mensagem de cadastro bem sucedido`

#### LOGIN

-   Method: `POST`
-   Path:`/users/login`
-   input: `email(string), password(string)`
-   Output: `mensagem de login bem sucedido`

#### REGISTER PRODDUCT

-   Method: `POST`
-   Path: `/products`
-   Input: `name(string), tag(array de string)`
-   Output: `retorna um produto criado e um id gerado pela aplicação`

#### GET ALL PRODUCTS

-   Method: `GET`
-   Path:`/products`
-   Output: `uma lista com todos os produtos`

#### FIND PRODUCTS BY NAME

-   Method: `GET`
-   Path:`/products/search?q=name`
-   Output: `possibilita realizar por uma busca por alguma palavra chave de um produto`

#### GET PRODUCTS BY ID

-   Method: `GET`
-   Path:`/products/:id`
-   Output: `possibilita realizar uma busca pelo parâmetro id de um produto`

---

### Documentação:

[Heroku](https://case-amaro-marcio.herokuapp.com/ping)
[Postman](https://documenter.getpostman.com/view/20789615/2s7YYoBmsW)

---

### Stack utilizada

-   NodeJS
-   TypeScript
-   MySQL
-   Knex
-   Express
-   Cors
-   JWT
-   UUID
-   BcryptJS
-   Markdown
-   Jest

---

### Programas utilizados

-   Git
-   VSCode
-   Extensão RESt Client (VSCode)
-   Extensão Markdown Preview Enchanced (VSCode)
-   BeeKeeper Studio
-   Postman API Platform
-   Heroku: Cloud Application Platform

---

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marcio-lima79)
