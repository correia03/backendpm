import { RotasModel } from "../models/rotas.model.js";

//adicionar uma rota
export const addrotas = async (req, res) => {
  const { origem,destino,hora,dia,preço } = req.body;
  try {
    const rotas = await rotasmodel.create({
      origem,
      destino,
      hora,
      dia,
      preço,
    });
    return res.status(201).json(rotas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};