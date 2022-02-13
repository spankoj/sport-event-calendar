# Sport Event Calendar

This Next.js project was created for Sportradar as a coding exercise.

## List of features

- landing page with the list of sport events
- user can add new sport event
- user can delete existing sport event

## HTML frontend

![Screenshot](./public/Screenshot_Sport.png)

## Database set up

### Postgres

- Download and install PostgreSQL
- Connect to the default database as administrator:
  `$ psql -U postgres`
- Create database:

  `CREATE DATABASE sportradar;`

  `CREATE USER sportradar2022 WITH ENCRYPTED PASSWORD 'sportradar2022';`

  `GRANT ALL PRIVILEGES ON DATABASE sportradar TO sportradar2022;`

- Run the following command:

  `$ psql -U sportradar2022 sportradar;`

- Password for user sportradar2022:

sportradar2022

## Database schema (ERD)

![Screenshot](./public/Screenshot_DB.png)

## Migrations

- use your package manager to install dependencies:

`yarn`

- invoke ley up to apply migrations:

`$ yarn migrate up`

## Run the app

To run next.js app in the development mode use:

`yarn dev`

Open [http://localhost:3000](http://localhost:3000) to view next.js app in the browser.
