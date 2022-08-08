# Projeto Cookenu Backend <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f371.svg" width="50" height="50">

O projeto em questão simula um sistema simplificado de receitas gastronômicas. Ele permite o registro, acesso e manipulação de usuários e receitas.

Este projeto é baseado em 2 entidades importantes que devem existir no código typescript como classes.

### User (usuário)

Representa os usuários de nossa aplicação. Todo usuário é composto pelas seguintes características:

-   id (string) e gerado pela própria aplicação
-   nickname (string)
-   email (string) único por usuário
-   password: senha hasheada (string)
-   role: enum "NORMAL" ou "ADMIN"

### Recipe (receita)

Representa as receitas da nossa aplicação. Cada receita possui as seguintes características:

-   id (string) gerado pela própria aplicação
-   title (string) representando o nome da receita
-   description (string) representando a descrição da receita
-   createdAt (Date) gerado pela própria aplicação representando a data de criação da receita
-   updatedAt (Date) gerado pela própria aplicação representando a data da última atualização da receita
-   creator_id (string) representando o id do usuário que criou a receita

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
JWT_KEY = "minha-senha-segura-bananinha123"
JWT_EXPIRES_IN = "24h"
BCRYPT_SALT_ROUNDS = 12
```

### Populando a tabela:

-   `npm run migrations`
    Cria e popula as tabelas com dados de usuários e receitas.
    _Esse script deve ser executado apenas uma única vez_

### Executar o projeto:

-   `npm run dev`:
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

---

### Endpoints

#### 1. Cadastro de usuário

-   Method: `POST`
-   Path: `/users/signup`
-   Input: `nickname, email, password`
-   Output:` mensagem de cadastro de um novo usuário. Ao final, retorna um token de acesso ao sistema.`

#### 2. Acesso de usuário

-   Method: `POST`
-   Path:`/users/login`
-   input: `email, password`
-   Output: `mensagem de acesso de um usuário cadastrado no endpoint anterior. Ao final, retorna um token de acesso ao sistema.`

#### 3. Cadastro de nova receita (protegido)

-   Method: `POST`
-   Path: `/recipes`
-   Input: `token de acesso gerado pelo sistema, title. description`
-   Output: `mensagem de receita criada com sucesso e a própria receita em si.`

#### 4. Editar receita (protegido)

-   Method: `PUT`
-   Path:`/recipes/:id`
-   Input: `token de acesso gerado pelo sistema, parâmetro as ser editado (title ou description)`
-   Output: `mensagem de edição/atualização de uma dada receita`
-   Observação: `os usuários do tipo “NORMAL” só poderão alterar as receitas que foram criados por eles mesmo, enquanto os usuários do tipo “ADMIN” podem alterar qualquer receita do sistema`

#### 5. Deletar receita (protegido)

-   Method: `DELETE`
-   Path:`/recipes/:id`
-   Input: `token de acesso gerado pelo sistema, id da receita a ser deletada(via params)`
-   Output: `mensagem de receita deletada com sucesso`
-   Observação: `usuários do tipo "NORMAL" só poderão deletar receitas criadas por eles mesmos, enquanto usuários do tipo "ADMIN" podem deletar qualquer receita existente no sistema`

#### 6. Buscar todas receita(s) (protegido)

-   Method: `GET`
-   Path:`/recipes`
-   Input: `token de acesso`
-   Output: `uma lista de todas as receitas cadastradas no sistema`
-   Observação: `é possível realizar uma busca por uma receita específica através de seu título ou descrição`

#### 7. Deletar usuário (protegido)

-   Method: `DELETE`
-   Path: `/recipes/:id`
-   Input: `token de acesso`
-   Output: `mensagem de deleção de um usuário existente no sistema pelo seu id`
-   Observação: `recurso acessível apenas para usuários do tipo "ADMIN"`

---

### Documentação (links):

[Heroku](https://cookenu-backend-marcio-aragon.herokuapp.com/ping)
[Postman](https://documenter.getpostman.com/view/20789615/VUjMoRQj)

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

- [**Márcio Lima**](https://github.com/MarcioLima79) - desenvolvedor em treinamento pela [Labenu](https://www.labenu.com.br/)
- [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marcio-lima79)
