<img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4ee.svg" width="70" height="70">

# Projeto Labook

Surgiu mais um freelance essa semana!

Uma jovem empreendedora teve uma ideia revolucionária que parece estar dando certo, mas está precisando de uma força para deixar o backend redondo. Ela já tem um time cuidando do Frontend e contratou você para implementar o Backend!

O Labook é uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. As pessoas poderão criar e curtir publicações.

## Entidades (TypeScript)

### User (usuário)

Representa os usuários de nossa aplicação. Todo usuário é composto pelas seguintes características:

-   id (string) e gerado pela própria aplicação
-   name (string)
-   email (string) único por usuário
-   password: senha hasheada (string)
-   role: enum "NORMAL" ou "ADMIN"

### Post (postagem)

Representa as receitas da nossa aplicação. Cada receita possui as seguintes características:

-   id (string) gerado pela própria aplicação
-   content (string) representando o conteúdo da postagem
-   user_id (string) representando o id de quem criou a postagem
-   likes (number) iniciando em 0

---

## Tabelas (MySQL)

### Labook_Users

-   id: VARCHAR(255) e chave primária
-   name: VARCHAR(255) e não-nulo
-   email: VARCHAR(255), não-nulo e único
-   password: VARCHAR(255) e não-nulo
-   role: ENUM “NORMAL” ou “ADMIN” com padrão “NORMAL” não-nulo

### Labook_Posts

-   id: VARCHAR(255) e chave primária
-   content: VARCHAR(255) e não-nulo
-   user_id: VARCHAR(255) e chave estrangeira referenciando a id de Labook_Users

### Labook_Likes

-   id: VARCHAR(255) e chave primária
-   post_id: VARCHAR(255) e chave estrangeira referenciando a id de Labook_Posts
-   user_id: VARCHAR(255) e chave estrangeira referenciando a id de Labook_Users

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
    Cria e popula as tabelas com dados _mockados_ de usuários e posts.
    -   _Esse script deve ser executado apenas uma única vez_
    -   _Se executado uma segunda vez, ele dropa as tabelas e reseta os dados mockados_

### Executar o projeto:

-   `npm run dev:`
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

---

### Endpoints

#### 1. Cadastro de usuário

-   **Método:** `POST`
-   **Caminho:** `/users/signup`
-   **Entrada:** `name, email, password`
-   **Saída:** `mensagem de cadastro de um novo usuário. Ao final, retorna um token de acesso ao sistema.`
-   **Validações e regras de negócio:**
    -   `name deve possuir ao menos 3 caracteres, enquanto password ao menos 6 caracteres`
    -   `email deve ter um formato válido e único, não podendo repetir no banco de dados`

#### 2. Acesso de usuário

-   **Método:** `POST`
-   **Caminho:** `/users/login`
-   **Entrada:** `email, password`
-   **Saída:** `mensagem de acesso de um usuário cadastrado no endpoint anterior. Ao final, retorna um token de acesso ao sistema.`
-   **Validações e regras de negócio:**
    -   `password deve possuir ao menos 6 caracteres`
    -   `email deve ter um formato válido`
    -   `O usuário com o email fornecido deve existir no sistema`

#### 3. Cria uma nova postagem (protegido)

-   **Método** `POST`
-   **Caminho** `/posts`
-   **Entrada** `token de acesso, content`
-   **Saída:** `mensagem de receita criada com sucesso e a própria receita em si.`
-   **Validações e regras de negócio:**
    -   `content deve possuir no mínimo 1 caractere`

#### 4. Buscar postagens (protegido)

-   **Método:** `GET`
-   **Caminho:** `/posts`
-   **Entrada:** `token de acesso`
-   **Saída** `uma lista de todas as receitas cadastradas no sistema`
-   **Observação:** `é possível realizar uma busca por uma postagem específica através de alguma palavra existente no texto`
-   **Validações e regras de negócio:**
    -   `dentre as informações dos posts, deve existir também o número de likes de cada um`

#### 5. Remover postagem (protegido)

-   **Método:** `DELETE`
-   **Caminho:** `/posts/:id`
-   **Entrada:** `token de acesso, id da postagem a ser removida (via params)`
-   **Saída:** `mensagem de receita deletada com sucesso`
-   **Validações e regras de negócio:**
    -   `id do post a ser deletado deve existir no sistema`

#### 6. Curtir postagem (protegido)

-   **Method:** `POST`
-   **Caminho:**`/posts/like/:id`
-   **Entrada:** `token de acesso, id da postagem`
-   **Saída:** `uma mensagem de sucesso`
-   **Validações e regras de negócio:**
    -   `id do post que ganhará o like deve existir no sistema`
    -   `se o post já estiver com o like da pessoa é retornado um erro`

#### 7. Descurtir postagem (protegido)

-   **Method:** `DELETE`
-   **Caminho:**`/posts/dislike/:id`
-   **Entrada:** `token de acesso, id da postagem`
-   **Saída:** `uma mensagem de sucesso`
-   **Validações e regras de negócio:**
    -   `id do post que ganhará o like deve existir no sistema`
    -   `se o post não estiver com o like da pessoa é retornado um erro`

---

### Referências

-   [Projeto Cookenu Backend](https://github.com/future4code/aragon-Marcio-Lima/pull/59)
-   [Projeto LabE-commerce Backend](https://github.com/future4code/aragon-Marcio-Lima/pull/53)
-   [Katherine Peterson](https://readme.so/pt)

### Documentação (links):

-   [Heroku]()
-   [Postman]()

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
