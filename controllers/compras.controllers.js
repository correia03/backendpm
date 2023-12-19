import { InfoModel } from "../models/info.model.js";  // Change the import path
import { RotasModel } from "../models/rotas.model.js";
import { Compras } from "../models/compras.model.js";

//adicionar uma compra onde é passado o userid rotasid ano , mes , dia mas antes verificar se o saldo do é menor que o preço e gerar erro se sim
export const addcompra = async (req, res) => {
  const { userId, rotasId, ano, mes, dia } = req.body;
  try {
    const rotas = await RotasModel.findByPk(rotasId);
    const info = await InfoModel.findOne({
      where: {
        userId: userId,
      },
    });
    if (info.saldo < rotas.preço) {
      return res.status(500).json({ message: "saldo insuficiente" });
    }
    const compras = await Compras.create({
      userId,
      rotasId,
      ano,
      mes,
      dia,
    });
    return res.status(201).json(compras);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};