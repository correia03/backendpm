import { RotasModel } from "../models/rotas.model.js";
import { ParagensModel } from "../models/paragens.model.js";

//get paragens onde o id da rota é x e vem no body

export const getparagens = async (req, res) => {
    const { rotasId } = req.body;
    try {
        const paragens = await ParagensModel.findAll({
        where: {
            rotasId: rotasId,
        },
        });
        return res.status(200).json(paragens);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
    }

//adicionar uma paragem onde é passado o nome lat long e rotasid
export const addparagem = async (req, res) => {
    const { nome, lat, long, rotasId } = req.body;
    try {
        const paragens = await ParagensModel.create({
        nome,
        lat,
        long,
        rotasId,
        });
        return res.status(201).json(paragens);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
    };