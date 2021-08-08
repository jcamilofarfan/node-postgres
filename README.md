# node-postgres


## Task API
App to register projects with tasks in postgreSQL database with orm Sequelize

> - git clone https://github.com/jcamilofarfan/node-postgres.git
> - cd node-postgres
> - npm install
> - npm run dev
> - open http://localhost:4000

the database with common user and common password must be changed in the file \
>database.js

    import Sequelize from 'sequelize';

    export const sequelize = new Sequelize(
        'postgres', // database name
        'postgres', // user
        'toor', //password
        {
            host: 'localhost',
            dialect: 'postgres',
            pool:{
                max:5,
                min:0,
                require: 30000,
                idle: 10000
            },
            logging: false
        }
    )


## API

The API has three endpoints:
* Projects
> CRUD of projects
* Tasks
> CRUD Task
* Tasks by projects:
> READ and UPDATE tasks by projects