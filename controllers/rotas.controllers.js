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
//get origem desino hora preço
export const getrotas = async (req, res) => {
  try {
    const rotas = await RotasModel.findAll();
    return res.status(200).json(rotas);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};