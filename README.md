# Fullstack app example

## Overview

Simple application showing customers data with CRUD operatoins

## Getting started

### Prerequisites

required
- Docker
- Node.js (8+)
- yarn

optional
- VSCode

### Install and run

run this commnads step by step

- `yarn` (install all dependencies)
- `yarn global add nodemon` (install nodemon globally)
- `yarn copy:env` (copy env.example to .env in yarn workspaces)
- `yarn start` (start the app)

last command will run postgresql in docker container, Hapi.js server and frontend app using webpack-dev-server

app will be running on `http://localhost:8080`, try to change zoom in your browser if the components size is too big or small

## Tools

- **Backend**
  - Docker
  - Postgresql
  - Hapi.js (server)
  - Typescript

- **Frontend**
  - React (v16.8 with Hooks)
  - Webpack (4+)
  - Axios
  - Purecss (css framework)
  - Autoprefixer
  - Babel (7+)
