## Description

API for deafable project
Hosted temporary on heroku
https://deafable-nest-api.herokuapp.com/api

## Installation

```bash
$ yarn install
```

## Setup database

make docker-compose.yml file with content

```yaml
version: '3.8'
services:
  dev-db:
    image: postgres:13
    ports:
      - 5434:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 123
      POSTGRES_DB: nest
    networks:
      - deafable
  test-db:
    image: postgres:13
    ports:
      - 5435:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 123
      POSTGRES_DB: nest
    networks:
      - deafable
networks:
  deafable:
```

then run

$ yarn run db:dev:restart

## Seed database with faker-js

$ yarn run seed

default password after running seeder is 'test12'

see database content with
$ yarn prisma studio

## Running the app

make .env file with content

```bash
DATABASE_URL="postgresql://username:password@localhost:5434/nest?schema=public"
JWT_SECRET='your-secret'
```

```bash
# development
$ yarn run start:dev

# production mode
$ npm run start:prod
```

## Test

test have different port with dev database
make .env.test file with content

```bash
DATABASE_URL="postgresql://username:password@localhost:5435/nest?schema=public"
JWT_SECRET='your-secret
```

```bash
# unit tests (no unit test yet)
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage (no test yet)
$ npm run test:cov
```

## Swagger Documentation

Access on http://localhost:3000/api
