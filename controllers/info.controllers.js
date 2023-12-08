import { InfoModel } from "../models/info.model.js";  // Change the import path
import { UserModel } from "../models/user.model.js";

export const getinfouserid = async (req, res) => {
  const { userId } = req.params;

  try {
    const info = await InfoModel.findAll({
      where: {
        userId: userId,
      },
    });
    return res.json(info);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
