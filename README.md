
# Sobre o Código

Esse código foi utilizado para a criação do curso [Automação Full Stack](http://qaninja.io/) da QA Ninja.

A QA Ninja é uma escola online que conta com um time de Ninjas de altíssimo nível pra oferecer o melhor conteúdo sempre focando em Tecnologias Relevantes. Ministramos treinamentos com foco na mudança do modelo mental do profissional de TI. 

# Guia de Uso

Rede
docker network create --driver bridge skynet

MongoDB
docker run --name mongo --network=skynet -d -p 27017:27017 mongo:4.1

## Docker

`
docker run --name mongo -d -p 27017:27017 mongo
`

## RabbitMQ

`
docker run -d --hostname rabbitmq --name rabbitmq --network=skynet -p 15672:15672 -p 5672:5672 -p 25676:25676 rabbitmq:3.7.15-management

Hosteando
Windows
Abra o prompt como Admin

notepad c:\windows\system32\drivers\etc\hosts
`
Acrescente as configurações
URL do MongoDb
127.0.0.1 mongo

URL do RabbitMQ
127.0.0.1 rabbitmq

URL do Jenkins :)
127.0.0.1 jenkins

Não esqueça de trocar os IPS pelo Alias no código fonte :)


# Exemplo da Integração

![Alt text](docs/Treko.jpg?raw=true "Exemplo")

## Exemplos de Report
no arquivo package.json
    "test": "npm run dropdb_win & set NODE_ENV=dev&mocha test/--reporter dot --require babel-register --exit",
    "test": "npm run dropdb_win & set NODE_ENV=dev&mocha test/--reporter nyan --require babel-register --exit",
    "test": "npm run dropdb_win & set NODE_ENV=dev&mocha test/--reporter tap --require babel-register --exit",
    "test": "npm run dropdb_win & set NODE_ENV=dev&mocha test/--reporter lading --require babel-register --exit",
    "test": "npm run dropdb_win & set NODE_ENV=dev&mocha test/--reporter progress --require babel-register --exit",
Site: https://www.npmjs.com/search?q=mocha%20html
pesquisar por: mocha html
 Clicar em:  mochawesome-report-generator
npm install --save-dev mochawesome
no arquivo package.json
"test": "npm run dropdb_win & set NODE_ENV=dev&mocha test/--reporter mochawesome --require babel-register --exit",    
