
import Sequelize  from "sequelize"; 

const database = new Sequelize({
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    database: 'pm',
    username: 'pm',
    password: 'pm'
});
export{database};