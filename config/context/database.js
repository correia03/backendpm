// CREATE DATABASE pm;
// CREATE USER 'pm'@'%' IDENTIFIED BY 'pm';
// GRANT ALL PRIVILEGES ON *.* TO 'pm'@'%' WITH GRANT OPTION;
// FLUSH PRIVILEGES;

import Sequelize  from "sequelize"; 

const database = new Sequelize({
    host: 'localhost',
    port: 3306,
    username: 'pm',
    password: 'pm',
    database: 'pm',
    dialect: 'mysql',
});
export{database};