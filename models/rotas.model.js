import { FLOAT, INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';

const RotasModel = database.define(
    'rotas',
    //id, origem,destino,hora,dia,preço
    {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        origem: {
            type: STRING,
            allowNull: false,
        },
        destino: {
            type: STRING,
            allowNull: false,
        },
        hora: {
            type: STRING,
            allowNull: false,
        },
        dia: {
            type: STRING,
            allowNull: false,
        },
        preço: {
            type: FLOAT,
            allowNull: false,
        },
    },)

    export{RotasModel};