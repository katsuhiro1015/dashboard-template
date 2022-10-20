# Setup

## Docker/Docker-Composeファイルの用意

Dockerfile

```Dockerfile
FROM node:18.11-alpine3.15
WORKDIR /usr/src/app
```

DockerCompose

```yaml
version: '3'
services:
  dashboard-template:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
     - ./:/usr/src/app
    command: sh -c "cd app && yarn start"
    ports:
     - "3000:3000"
```

## docker-compose実行

```bash
docker-compose run --rm dashboard-template sh -c "npm install -g create-react-app && create-react-app app --template typescript"
```
