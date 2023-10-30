# Simple React App

Este é um simples projeto de um app com ReactJS, typescript e Vite. Essa aplicação foi usada para criar um crud simples com operações de criação, edição, exclusão, listagem e recuperação de dados, persistidos no localStorage. Além disso, também foi desenvolvidos alguns testes unitários, responsividade e definição de estilo com pré-processador SASS.

## Instalação

Uma rápida introdução da configuração mínima que você precisa para conseguir rodar o projeto.

```shell
git clone https://github.com/Denis-Lima/simple-react-app.git
cd simple-react-app
npm install
```

Primeiro faremos um clone do projeto. Em seguida, entraremos na pasta clonada e por fim, instalaremos as dependências do projeto.

## Desenvolvimento

### Feito com

React, React Router, SASS, Vite, jest, Typescript

### Pré-requisitos

- [NodeJS](https://nodejs.org/en/download/current) v18.16.1 ou mais recente

### Configurando Dev

```shell
git clone https://github.com/Denis-Lima/simple-react-app.git
cd simple-react-app
npm install
```

Só é necessário os comandos acima para baixar e instalar o projeto!

### Building

```shell
npm install
```

Para instalar o projeto, só é necessário rodar o comando `npm install`.

## Tests

Os testes presentes nesse projeto são apenas testes de unidade e cobrem coisas básicas, como por exemplo, se o componente está renderizado na página, ou se algum comportamento ou atributo deve aparecer ou não, dependendo das props passadas para o mesmo.

```shell
npm run test
```

## Style guide

A estrutura do projeto utilizado foi organizada da seguinte forma:

- components: os componentes reutilizáveis do projeto
- pages: cada arquivo representa uma página (url) do projeto
- routes: configuração das rotas do projeto
- stores: funções que lidam com a leitura e escrita da nossa store, que no caso é o localStorage
- styles: estilização global que não faz parte de nenhum componente específico
- utils: funções utilitárias
- views: componentes que possuem 1 ou mais componentes dentro, para formar partes mais complexas para o usuário

Os componentes das pastas "components" e "views" possuem uma pasta própria para eles, onde fica junto o componente em si, o arquivo de estilização próprio e seu arquivo de teste.
