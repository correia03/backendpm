
import {UserModel} from '../models/user.model.js';
import {createToken} from '../util/jwt.js';

export const register = async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password)
      return res.status(405)
  
    const user = await UserModel.create({
      username: username,
      password,
    });
  
    return res.json(user);
  };

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({
      where: {
        username: username,
        password: password,
      },
    });
    if (!user) {
      return res.status(401).json({ message: 'User nao existe' });
    }
    const token = createToken({
      id: user.id,
      username: user.username,
    }); // este payload, é o que futuramente vai estar dentro do req.user
  
    console.log(token);
    return res.json({
      token,
    });
  };