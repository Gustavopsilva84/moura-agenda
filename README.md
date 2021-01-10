# Moura Agenda

### Desenvolvimento

O projeto foi construído visando micro serviços, ou seja, um servidor de API para consumo dos dados e um servidor para servir as páginas web.

No servidor foi utilizado a arquitetura de API e camadas de entidade, dados e logica.

O banco de dados utilizado foi o sqlite.

### Instalação

Neste projeto foi utilizada a versão do Node 14.15.4 que pode ser encontrada [aqui](https://nodejs.org/dist/v14.15.4/node-v14.15.4-x64.msi).

Caso você esteja usando Windows talvez seja necessário baixar o pacote [Windows Build Tools](https://www.npmjs.com/package/windows-build-tools).

Tendo instalado o node e o pacote caso necessário va até o diretório de backend e execute o seguinte comando: 

`npm install`

Agora va até o diretório do frontend e digite o seguinte comando:

`npm install`

### Execução

Tendo executado o comando npm install sem problemas execute a seguinte linha no direitório backend:

`npm run iniciar-dev`

Feito isso seu backend estará rodando.

Agora vá até o diretório frontend e execute o seguinte comando:

`npm run iniciar-dev`

Feito isso o seu projeto já devera estar com os dois servidores rodando backend e frontend. Caso queira debugar o backend utilize algum programa como Postman ou Insominia e acesse as seguintes rotas: 

* GET: http://127.0.0.1:5554/pessoas/pessoa/{codigo}
* GET All: http://127.0.0.1:5554/pessoas
* POST: http://127.0.0.1:5554/pessoas/pessoa passando os valores nome, telefone, endereco no corpo
* PUT: http://127.0.0.1:5554/pessoas/pessoa/{codigo} passando os valores nome, telefone, endereco no corpo
* DELETE: http://127.0.0.1:5554/pessoas/pessoa/{codigo}

Caso queira testar aplicação acesse a rota http://127.0.0.1:5556.