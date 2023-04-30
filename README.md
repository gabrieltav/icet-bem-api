# README #

Estrutura de um projeto Adonis 5

### Configurações prontas ###

* Banco de dados Postgres e SQLite (para testes funcionais automatizados)
* Autenticação com JWT
* Docker-compose para rodar o banco localmente
* Testes automatizados (unitários e funcionais)

### Descrição das pastas (camadas) dentro de app/ ###

* Controllers, Exceptions, Middleware, Models e Validators são próprias do Adonis
* Dtos - Interfaces usadas para passar os dados entre camadas
* Repositories - Classes e interfaces para manipular os dados do banco
* Services - Classes onde são implementadas as regras de negócio, também serve de intermediária entre os repositórios e controles

### Requisitos ###

* Node, npm, adonis 5
* Docker para rodar o banco de dados (caso prefira rodar um banco sem docker, não há nenhum impedimento)
* Trocar o texto "base-project" em todos os lugares pelo nome do projeto

#### Fique a vontade para alterar esse modelo, mas se não for correção ou melhoria, utilize uma branch diferente ####