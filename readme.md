## What is this?
This is a stripped down version of of Wes Bos' tutorial Learning Node starter files. This project includes:
- Setting up mongodb
- Using express with passport.js
- Setting up some mock users (see below)
- Setting up a user schema
- Doing other express scaffolding
- Email templates

It probably contains stuff you don't need for a typical API backend, but gets you started with the basics. 

## Mongo
`mkdir data`

`mongod --dbpath data`

## Environment variables
`touch variables.env`

Contents:
```
NODE_ENV=development
DATABASE=mongodb://localhost/your_database_name
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
PORT=7777
SECRET=snickers
KEY=sweetsesh
```

## Sample Data

To load sample data, run the following command in your terminal:

```bash
yarn sample
```

If you have previously loaded in this data, you can wipe your database 100% clean with:

```bash
yarn blowitallaway
```

That will populate some users in your database with the following credentials:

| Name          | Email (login)      | Password |
| ------------- | ------------------ | -------- |
| Wes Bos       | wes@example.com    | wes      |
| Debbie Downer | debbie@example.com | debbie   |
| Beau          | beau@example.com   | beau     |
