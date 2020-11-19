
# Desafio Back-End NodeJS :smile:

## Descrição

Aplicação desenvolvida com [Nest](https://github.com/nestjs/nest) 

## Instalação

```bash
$ npm install
```

## Configuração do banco de dados

Primeiramente alterar a senha do usuário root 


```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass';
```
Logo em seguida criar o banco de dados

```sql
CREATE DATABASE locadora;
```

OPCIONAL (será criada pela própria aplicação pelo TypeOrm)
Criar tabelas

```sql
CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  email varchar (100) NOT NULL, 
  password varchar (100) NOT NULL,
  PRIMARY KEY(email)
  );
```

```sql
CREATE TABLE movie (
  id int  NOT NULL AUTO_INCREMENT,  
  title varchar(100) NOT NULL,
  director varchar(100) NOT NULL,
  isRented boolean NOT NULL,
  PRIMARY KEY(id)
  );
```

## Executando o app

```bash
# desenvolvimento
$ npm run start

# modo de verificação
$ npm run start:dev

# modo de produção
$ npm run start:prod
```

## Testes

```bash
# testes unitários
$ npm run test

# cobertura de testes
$ npm run test:cov
```
## Especificação de webservices

Após inicialização da aplicação, ir para [Página do webservice](http://localhost:3000/api "Página do webservice")

## Licensa

  Nest tem uma licença [MIT](LICENSE).
