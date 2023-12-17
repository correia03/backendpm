import { FLOAT, INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';
import { UserModel } from './user.model.js';

const InfoModel = database.define(
  'info',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    escola: {
      type: STRING,
      allowNull: false,
    },
    curso: {
        type: STRING,
        allowNull: false,
    },
    numeroaluno: {
      type: INTEGER,
      allowNull: false,
    },
    nif:{
        type: INTEGER,
        allowNull: false,
        },
    telefone: {
        type: INTEGER,
        allowNull: false,
        },
    saldo: { //type float
      type: FLOAT,
      allowNull:false,
    },
    niss: {
        type: INTEGER,
        allowNull: false,   
    },
    userId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: 'id',
      },
    },
    },
);

InfoModel.belongsTo(UserModel, { foreignKey: 'userId', onDelete: 'CASCADE' });

export { InfoModel };
