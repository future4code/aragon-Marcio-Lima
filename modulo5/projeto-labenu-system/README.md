# Projeto LabenuSystem

O projeto em questão reproduz um sistema que representa o básico da organização educacional desenvolvido na [Labenu](https://www.labenu.com.br/). Este sistema permitirá o registro, acesso e manipulação de participantes ativos de um ambiente educacional (estudantes e turmas).

O projeto será baseado em 2 entidades importantes que devem existir no código typescript como classes:

### Classroom (turma)

Uma turma é composta pelas seguintes características:

-   id em string gerado pela própria aplicação
-   name em string
-   students em lista de ids de students que estão matriculados na turma
-   module: número do módulo atual da turma, que pode valer entre 0 e 6, sendo que 0 significa que a turma ainda não começou.

### Student (estudante)

Representa estudantes da nossa instituição. Cada estudante deve estar em uma, e somente uma turma por vez. Estudantes com cadastro novo podem começar sem turma definida.

Cada estudante possui as seguintes características:

-   id em string gerado pela própria aplicação
-   name em string
-   email em string
-   birthdate em Date no formato AAAA/MM/DD (data de nascimento)
-   classroomId em null ou id em string da turma matriculada, null significa que a pessoa ainda não está em nenhuma turma
-   hobbies em lista de ids de hobbies da pessoa

Observação: Caso o hobby (ou hobbies) selecionado ainda não exista na tabela de hobbies, ele deve ser adicionado à tabela de hobbies automaticamente pelo sistema.

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

#### 1. createClassroom

-   Method: `POST`
-   Path: `/classrooms`
-   Input: `name(string), module(string)`
-   Output: uma nova turma com os parâmetros: id, name e module.

#### 2. getActivesClassrooms

-   Method: `GET`
-   Path:`classrooms/active`
-   input: _nenhum_
-   Output: uma lista com todas as turmas ativas.

#### 3. changeModuleClass

-   Method: `PUT`
-   Path: `/classrooms/:classroomId`
-   Input: `module(string)`
-   Output: atualização do módulo de determinada turma.

#### 4. createStudent

-   Method: `GET`
-   Path:`/students`
-   Input: `name(string), email(string), birthdate(Date), classroom_id`
-   Output: uma lista com todos os produtos.

#### 5. getStudentByName

-   Method: `GET`
-   Path:`/students?q=name`
-   Input: _nenhum_
-   Output: todas as informações do aluno objeto da busca (via params). Caso uma busca não seja realizada, retorna a lista completa de alunos.

#### 6. editStudentClass

-   Method: `PUT`
-   Path:`/students/:studentId`
-   Input: `classroom_id`
-   Output: a atualização da turma do aluno de acordo que seu id.

#### 7. getStudentByClass

-   Method: `GET`
-   Path: `/students/:classroomId`
-   Input: _nenhum_
-   Output: todos os alunos da turma objeto da busca.

---

### Documentação:

[Heroku](https://marcio-aragon-labenu-system.herokuapp.com/classrooms/)

---

### Stack utilizada

-   NodeJS
-   TypeScript
-   MySQL
-   Knex
-   Express
-   Cors

---

### Programas utilizados

-   Git
-   VSCode + extensão REST Client
-   BeeKeeper Studio
-   Postman API Platform
-   Heroku: Cloud Application Platform

---

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marcio-lima79)
