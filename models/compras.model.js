import { INTEGER, Sequelize } from 'sequelize';
import { database } from '../config/context/database.js';
import { UserModel } from './user.model.js';
import { RotasModel } from './rotas.model.js';

const Compras = database.define('compras', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: UserModel,
      key: 'id',
    },
  },
  rotasId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: RotasModel,
      key: 'id',
    },
  },
  ano: {
    type: INTEGER,
    allowNull: false,
  },
  mes: {
    type: INTEGER,
    allowNull: false,
  },
  dia: {
    type: INTEGER,
    allowNull: false,
  },
});
Compras.belongsTo(UserModel, { foreignKey: 'userId', onDelete: 'CASCADE' });
Compras.belongsTo(RotasModel, { foreignKey: 'rotasId', onDelete: 'CASCADE' });

export { Compras };
