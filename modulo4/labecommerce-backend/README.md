## Instruções

### Instalando as dependências:

-   `npm install`:
    Instala todas as dependências listadas no `package.json`.

### Criando o arquivo .env:

Criar o arquivo `.env` e configurar com as informações de seu banco de dados.

```
PORT: 3003
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados
```

### Populando a tabela:

-   `npm run migrations`
    Popula a tabela com dados de usuários.
    _Esse script deve ser executado apenas uma única vez_

### Executar o projeto:

-   `npm run dev`:
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

### Endpoints:

#### 1. registerUser

-   Method: `POST`
-   Path: `/users`
-   Input: `email(string), password(string)`
-   Output: um novo usuário com os parâmetros: id, email e password.

#### 2. getAllUsers

-   Method: `GET`
-   Path:`/users`
-   Output: uma lista com todos os usuários.

#### 3. registerProduct

-   Method: `POST`
-   Path: `/products`
-   Input: `name(string), price(number)`
-   Output: um novo produto com os parâmetros: id, name e price.

#### 4. getAllProducts

-   Method: `GET`
-   Path:`/products`
-   Output: uma lista com todos os produtos.

#### 5. productPurchaseRecord

-   Method: `POST`
-   Path:`/purchases`
-   Input: `user_id(string), product_id(string), quantity(number)`
-   Output: uma nova compra com os parâmetros: id, user_id, product_id, quantity, total_price.

#### 6. getPurchaseByUserId

-   Method: `GET`
-   Path:`/users/:user_id/purchases`
-   Output: o histórico de compras de um usuário por seu id.

### Documentação:

Postman

### Link Heroku
