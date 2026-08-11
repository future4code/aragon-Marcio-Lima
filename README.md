# Refactor Labenu Dev 2022

Repositório de refatoração dos exercícios do curso de desenvolvimento web da Labenu (turma Aragon, 2022).

O objetivo deste repositório é reestudar cada módulo resolvendo os exercícios do zero. Cada exercício possui sua própria branch (com `ENUNCIADO.md`) e cada projeto possui um `README.md` documentando o que foi construído.

## Mapa da jornada

### Módulo 1 — Lógica e Frontend básico

| Exercício | Branch | Tipo |
| --- | --- | --- |
| Introdução ao Git | `git-1` a `git-5` | Aula |
| Variáveis e Operadores | `variaveis` / `operadores` | Aula |
| Strings e Arrays | `string-arrays` | Aula |
| Funções | `funcoes` | Aula |
| **Lista de exercícios JS** | `projeto-lista-js` | Projeto |
| Objetos | `objetos` | Aula |
| Condicionais | `aula-condicionais` | Aula |
| Laços | `lacos` | Aula |
| Funções de Array | `funcoes-de-array` | Aula |
| **Blackjack** | `projeto-blackjack` | Projeto |
| HTML | `html-sistema-loja` | Aula |
| CSS Bugfixes | `css-bugfixes` | Aula |
| **Portfólio** | `projeto-portfolio` | Projeto |
| Flex e Grid | `flex-grid` | Aula |
| CSS Labetube | `css-labetube` | Aula |

### Módulo 2 — React

| Exercício | Branch | Tipo |
| --- | --- | --- |
| JSX Labetube | `jsx-labetube` | Aula |
| Props Labedin | `props-labedin` | Aula |
| Renderização condicional e formulários | `rend-condicional-form` | Aula |
| Postman | `postman` | Aula |
| Estados Insta4 | `estados-insta4` | Aula |
| APIs Labenusers | `apis-labenusers` | Aula |
| **Labefy** | `projeto-labefy` | Projeto |

### Módulo 3 — React avançado e Hooks

| Exercício | Branch | Tipo |
| --- | --- | --- |
| useState | `use-state` / `use-state-2` | Aula |
| useEffect | `use-effect` | Aula |
| **Astromatch** | `projeto-astromatch` | Projeto |
| **Labex** | `projeto-labex` | Projeto |
| **Labeddit** | `labeddit` | Projeto |

### Módulo 4 — Backend e TypeScript

| Exercício | Branch | Tipo |
| --- | --- | --- |
| Node e package.json | `node-package-json` | Aula |
| TypeScript (intro e aprofundamento) | `intro-typescript` / `aprofundamento-typescript` | Aula |
| **Lista de exercícios TS** | `projeto-lista-typescript` | Projeto |
| Express (intro, aprofundamento, fluxo de dados) | `intro-express` / `aprofundamento-express` / `fluxo-de-dados-backend` | Aula |
| APIs REST | `apis-rest` | Aula |
| **Labebank** | `projeto-labebank` | Projeto |
| SQL (intro e aprofundamento) | `intro-sql` / `aprofundamento-sql` | Aula |
| Knex | `intro-knex` | Aula |
| **To Do List** | `projeto-toDoList` | Projeto |
| Filtros, ordenação e paginação | `filtros-ordenacao-paginacao` | Aula |
| Query Builders | `query-builders` | Aula |
| Deploy Heroku | `heroku` | Aula |
| **Labecommerce** | `labecommerce-backend` | Projeto |

### Módulo 5 — POO, Arquitetura e Testes

| Exercício | Branch | Tipo |
| --- | --- | --- |
| Classes e encapsulamento | `classes-encapsulamento` | Aula |
| Herança | `heranca` | Aula |
| **Labenu System** | `projeto-labenu-system` | Projeto |
| Autenticação | `intro-auth` | Aula |
| Criptografia | `intro-criptografia` | Aula |
| **Cookenu** | `projeto-cookenu` | Projeto |
| Arquitetura (camadas, DTOs, injeção) | `arquitetura-camadas` / `arquitetura-dtos` / `arquitetura-injecao` | Aula |
| **Labook** | `projeto-labook` | Projeto |
| Testes (Jest e erros) | `testes-jest` / `testes-erros` | Aula |
| **LAMA** | `projeto-lama` | Projeto |

### Módulo 6 — Casos de estudo

| Exercício | Branch | Tipo |
| --- | --- | --- |
| Case Amaro | `rodada-cases-2` | Projeto |
| Case Brainn | `rodada-cases-2-brainn` | Projeto |
| Case Loft | `rodada-case-1` | Projeto |

## Como usar

1. Escolha um exercício pelo mapa acima
2. Crie a branch de trabalho a partir da branch original:

   ```bash
   git checkout -b moduloX-exercicio-Y origin/<branch-do-exercicio>
   ```

3. Leia o `ENUNCIADO.md` da pasta do exercício
4. Resolva o exercício e commite seu progresso
5. Revise e compare com a sua solução original

## Estrutura

```
.
├── README.md        # mapa da jornada (este arquivo)
├── modulo1/         # aulas e projetos do módulo 1
│   ├── nome-da-aula/
│   │   ├── ENUNCIADO.md
│   │   └── ...
│   └── nome-do-projeto/
│       ├── ENUNCIADO.md
│       ├── README.md     # documentação do projeto
│       └── ...
├── modulo2/
├── ...
└── modulo6/
```
