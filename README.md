# crypto-investments-tracker

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Run docker pgadmin4

```sh
docker pull dpage/pgadmin4
docker run -p 8080:80 --name pgadmin4 -e PGADMIN_DEFAULT_EMAIL=yourmail@mail.com -e PGADMIN_DEFAULT_PASSWORD=yourpassword -d dpage/pgadmin4
```

### Run docker postgres

```sh
docker pull postgres
docker run --name crypto-db -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres
```

### start node server

```sh
node src/server/server.js
```

### useful docker commands :

```sh
#shows all running containers
docker ps -a
#stops the container
docker stop myContainer
#removes the container
docker rm myContainer
```
