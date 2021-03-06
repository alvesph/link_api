<h1 style='text-align: center'>LinkApi Teste</h1>

## APIS Ultilizadas:

- **Pipedrive** Sistema CRM focado em vendas <br>
- **Bling** Sistema de Gestao

---
## Objetivo:
- [x] Construção de uma API RESTful usando a tecnologia NodeJS.

---
## Requisitos:

- [x] Criar contas testes nas plataformas Pipedrive e Bling.

- [x] Criar uma integração entre as plataformas Pipedrive e Bling (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

- [x] Criar banco de dados Mongo, existem serviços como MongoDB Atlas para criar de graça.

- [x] Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

- [x] Criar endpoint para trazer os dados consolidados da collection do MongoDB.

---

## Baixando projeto

```bash
# Clonar o repositório
$ git clone https://github.com/alvesph/link_api.git

# Entrar no diretório
$ cd test-link_api

# Instalar as dependências
$ npm install

# Iniciar a aplicação
$ npm run start
```
