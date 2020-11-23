
# Documentação "Quais apps estão usando meu plano?"

## `Tecnologias utilizadas nos componentes de  desenvolvimento` 

* **Node**
    * Express
* **WEB Application**
    * jQuery
* **Deploy**
    * Docker

## `INSTALAÇÃO E CONFIGURAÇÃO`

### `Configuração`

- Change .env.example to .env and fill it.

    > cp .env.example .env

### `Instalação DOCKER`

- Building your image

    > docker build -t web/apps_plans .

- Run the image

    > docker run -p 3000:3000 -d web/node-web-app

- Test
    > docker ps
    > curl -i localhost:3000/app


### `Instalação Desenvolvimento Node

- Instale as dependencias
    > npm install 

- Rode a aplicação
    > node server.js

    


