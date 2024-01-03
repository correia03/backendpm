import { InfoModel } from "../models/info.model.js";  // Change the import path
import { UserModel } from "../models/user.model.js";


//get info by id
export const getinfouserid = async (req, res) => {
  const { userId } = req.params;
  try {
    const info = await InfoModel.findOne({
      where: {
        userId: userId,
      },
    });
    return res.status(200).json(info);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

//post info
export const addinfo = async (req, res) => {
  const { nome, email, escola, curso, numeroaluno, nif, telefone, saldo, niss, userId } = req.body;
  try {
    const info = await InfoModel.create({
      nome,
      email,
      escola,
      curso,
      numeroaluno,
      nif,
      telefone,
      saldo,
      niss,
      userId,
    });
    return res.status(201).json(info);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//update info
export const updateinfo = async (req, res) => {
  const { nome, email, escola, curso, numeroaluno, nif, telefone, saldo, niss, userId } = req.body;

  try {
    const info = await InfoModel.update(
      {
        nome,
        email,
        escola,
        curso,
        numeroaluno,
        nif,
        telefone,
        saldo,
        niss,
        userId,
      },
      {
        where: {
          id: userId, // Use userId here
        },
      }
    );

    return res.status(200).json(info);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
//adicionar saldo quem vem no body com oq ja tem na base de dados onde o id é do user
export const addsaldo = async (req, res) => {
  const { userId, saldo } = req.body;
  try {
    const info = await InfoModel.findOne({
      where: {
        userId: userId,
      },
    });
    const saldoatual = info.saldo;
    const novosaldo = saldoatual + saldo;
    await InfoModel.update(
      {
        saldo: novosaldo,
      },
      {
        where: {
          userId: userId,
        },
      }
    );
    return res.status(200);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
