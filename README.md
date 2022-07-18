## Description

API for deafable project

## Installation

```bash
$ yarn install
```

## Setup database

make docker-compose.yml file with content
docker-compose.yml

version: '3.8'
services:
dev-db:
image: postgres:13
ports: - 5434:5432
environment:
POSTGRES_USER: username
POSTGRES_PASSWORD: password
POSTGRES_DB: nest
networks: - deafable
test-db:
image: postgres:13
ports: - 5435:5432
environment:
POSTGRES_USER: username
POSTGRES_PASSWORD: password
POSTGRES_DB: nest
networks: - deafable
networks:
deafable:

$ yarn run db:dev:restart

## Running the app

make .env file with content

DATABASE_URL="postgresql://username:password@localhost:5434/nest?schema=public"
JWT_SECRET='your-secret'

```bash
# development
$ yarn run start:dev

# production mode
$ npm run start:prod
```

## Test

make .env.test file with content

<!-- different port with dev database -->

DATABASE_URL="postgresql://username:password@localhost:5435/nest?schema=public"
JWT_SECRET='your-secret

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
