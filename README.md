# Sport Event Calendar

This Next.js project was created for Sportradar as a coding academy exercise.

## List of features

- landing page with the list os sport events
- user can add new sport event
- user can delete existing sport event

## Database schema (ERD)

![Screenshot](./public/Screenshot_DB.png)

## Database set up

### Postgres

- download and install PostgreSQL
- connect to the default database as administrator
  `$ psql -U postgres`
- create database:

  `CREATE DATABASE sportradar;`

  `CREATE USER sportradar2022 WITH ENCRYPTED PASSWORD 'sportradar2022';`

  `GRANT ALL PRIVILEGES ON DATABASE sportradar TO sportradar2022;`

- run the following command:

  `$ psql -U sportradar2022 sportradar;`

- password for user sportradar2022: sportradar2022

### Migrations

<!-- - install:

  `$ yarn add ley`

- follow setup instructions

  https://github.com/lukeed/ley#cli -->

- invoke ley up to apply migrations

  `$ yarn migrate up`

## HTML frontend

![Screenshot](./public/Screenshot_Sport.png)

## Run the app

Use your package manager to install dependencies

> `yarn`

To run next.js app in the development mode use

> `yarn dev`

Open [http://localhost:3000](http://localhost:3000) to view next.js app in the browser.
