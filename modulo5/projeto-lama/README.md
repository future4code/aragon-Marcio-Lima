![LAMA](https://user-images.githubusercontent.com/101565117/185765552-6106df15-4df8-4328-89eb-0ff7f8d84ca7.png)

# Projeto LAMA

Labenu Music Awards é um show anual de músicas organizado pela própria Labenu que conta com a participação de bandas super famosas nacionais e internacionais! Ele sempre acontece durante uma semana inteira, começando na manhã de segunda e encerrando na noite de domingo.

O LAMA (Labenu Music Awards) está previsto para acontecer no fim do ano e ainda não existe um back-end construído para gerenciar os eventos e ingressos do festival.

Para gerenciar o evento é necessário organizar e centralizar as informações dos shows em um servidor, que então disponibiliza os dados para o website no front-end (que já está criado). Além de controlar os eventos com suas bandas e datas do show, a aplicação também deve gerenciar os ingressos de cada show. A arena tem uma capacidade máxima de 5000 pessoas, portanto deve ser respeitado um limite máximo de ingressos por show.

## Entidades (TypeScript)

### User (usuário)

Representa os usuários de nossa aplicação. Todo usuário é composto pelas seguintes características:

-   `id (string) e gerado pela própria aplicação`
-   `name (string)`
-   `email (string) único por usuário`
-   `password: senha hasheada (string)`
-   `role: enum "NORMAL" ou "ADMIN"`

### Show (show)

Representa as receitas da nossa aplicação. Cada receita possui as seguintes características:

-   `id (string) gerado pela própria aplicação`
-   `band (string) representando o nome da banda`
-   `startsAt (Date) representando a data da apresentação`
-   `tickets (number) representando os ingressos ainda disponíveis`

---

## Tabelas (MySQL)

### Lama_Users

-   `id VARCHAR(255) e chave primária`
-   `name VARCHAR(255) e não-nulo`
-   `email VARCHAR(255), não-nulo e único`
-   `password VARCHAR(255) e não-nulo`
-   `role ENUM “NORMAL” ou “ADMIN” com padrão “NORMAL” não-nulo`

### Lama_Shows

-   `id VARCHAR(255) e chave primária`
-   `band VARCHAR(255) e não-nulo`
-   `starts_at: DATE e não-nulo`

### Lama Tickets

-   `id VARCHAR(255) e chave primária`
-   `show_id VARCHAR(255) e chave estrangeira referenciando a id de Labook_Shows`
-   `user_id VARCHAR(255) e chave estrangeira referenciando a id de Labook_Users`

---

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
JWT_KEY = "minha-senha-segura"
JWT_EXPIRES_IN = "24h"
BCRYPT_SALT_ROUNDS = 12
```

### Populando a tabela:

-   `npm run migrations`
    Cria e popula as tabelas com dados _mockados_ de usuários e shows.
    -   _Esse script deve ser executado apenas uma única vez_
    -   _Se executado uma segunda vez, ele dropa as tabelas e reseta os dados mockados_

### Executar o projeto:

-   `npm run dev:`
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

---

### Funcionalidades

#### 1. Cadastro de usuário

-   **Método:** `POST`
-   **Caminho:** `/users/signup`
-   **Entrada:** `name, email, password`
-   **Saída:** `mensagem de cadastro de um novo usuário. Ao final, retorna um token de acesso ao sistema.`
-   **Validações e regras de negócio:**
    -   `name, email e password devem ser fornecidos e serem do tipo string`
    -   `name deve possuir ao menos 3 caracteres, enquanto password ao menos 6 caracteres`
    -   `email deve ter um formato válido e único, não podendo repetir no banco de dados`

#### 2. Acesso de usuário

-   **Método:** `POST`
-   **Caminho:** `/users/login`
-   **Entrada:** `email, password`
-   **Saída:** `mensagem de acesso de um usuário cadastrado no endpoint anterior. Ao final, retorna um token de acesso ao sistema.`
-   **Validações e regras de negócio:**
    -   `email e password devem ser fornecidos e serem do tipo string`
    -   `password deve possuir ao menos 6 caracteres`
    -   `email deve ter um formato válido`
    -   `O usuário com o email fornecido deve existir no sistema`

#### 3. Cria um novo show (protegido)

-   **Método** `POST`
-   **Caminho** `/shows`
-   **Entrada** `token de acesso, band, startsAt`
-   **Saída:** `mensagem de show criado com sucesso e os dados do show em si`
-   **Validações e regras de negócio:**
    -   `a data do show não pode ser anterior ao início do festival (5 de dezembro)`
    -   `só pode existir um show por dia durante o evento`
-   **Observação:** `este endpoint deve ser acessível apenas aos admins.`

#### 4. Buscar shows

-   **Método:** `GET`
-   **Caminho:** `/shows`
-   **Entrada:** `nenhuma`
-   **Saída** `uma lista com todos os shows agendados`
-   **Validações e regras de negócio:**
    -   `dentre as informações dos shows, deve existir também o número de ingressos disponíveis (iniciando em 5000)`

#### 5. Criação da reserva de ingresso (protegido)

-   **Método:** `POST`
-   **Caminho:** `/shows/tickets/:id`
-   **Entrada:** `token de acesso, id do show a ser reservado`
-   **Saída:** `mensagem de reserva realizada com sucesso`
-   **Validações e regras de negócio:**
    -   `id do show reservado deve existir no banco de dados`
    -   `uma mesma pessoa só pode reservar um ingresso para cada show`
    -   `deve ser respeitado o limite de 5000 ingressos por show`
-   **Observação:** `este endpoint deve ser acessível apenas aos admins.`

#### 6. Remoção da reserva de ingresso (protegido)

-   **Método:** `DELETE`
-   **Caminho:**`/shows/tickets/:id`
-   **Entrada:** `token de acesso, id do show a ser removido`
-   **Saída:** `mensagem de reserva removida com sucesso`
-   **Validações e regras de negócio:**
    -   `id do post que ganhará o like deve existir no sistema`
    -   `se o post já estiver com o like da pessoa é retornado um erro`
-   **Observação:** `este endpoint deve ser acessível apenas aos admins.`

---

### Referências

-   [Projeto Cookenu Backend](https://github.com/future4code/aragon-Marcio-Lima/pull/59)
-   [Projeto LabE-commerce Backend](https://github.com/future4code/aragon-Marcio-Lima/pull/53)
-   [Projeto Labook](https://github.com/future4code/aragon-Marcio-Lima/pull/63)
-   [Katherine Peterson](https://readme.so/pt)

### Documentação (links):

-   [Heroku](https://projeto-lama-marcio.herokuapp.com/shows)
-   [Postman](https://documenter.getpostman.com/view/20789615/VUqpscWw#351eae54-19f4-40d9-8038-78d3acc554ba)

### Coverage

## ![coverage](https://user-images.githubusercontent.com/101565117/185766411-306f35d1-f15e-49ea-a0b3-848fd299c1c8.png)

### Tecnologias utilizadas

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
-   Extensão REST Client
-   Extensão Markdown Preview Enchanced
-   BeeKeeper Studio
-   Postman API Platform
-   Heroku: Cloud Application Platform

---

### Autor

-   [**Márcio Lima**](https://github.com/MarcioLima79) - desenvolvedor em treinamento pela [Labenu](https://www.labenu.com.br/)
-   [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marcio-lima79)
