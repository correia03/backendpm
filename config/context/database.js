
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