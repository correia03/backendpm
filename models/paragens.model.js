import { INTEGER, FLOAT, STRING  } from "sequelize";
import { database } from "../config/context/database.js";
import { RotasModel } from "./rotas.model.js";

//id nome da paragem lat long chave estrangeira rotasid
const ParagensModel = database.define(
    "paragens",
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
        lat: {
            type: FLOAT,
            allowNull: false,
        },
        long: {
            type: FLOAT,
            allowNull: false,
        },
        rotasId: {
            type: INTEGER,
            allowNull: false,
            references: {
                model: RotasModel,
                key: "id",
            },
        },
    },
);
ParagensModel.belongsTo(RotasModel, {foreignKey: "rotasId",onDelete: "CASCADE",});

export { ParagensModel };



