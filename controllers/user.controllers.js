
import {UserModel} from '../models/user.model.js';
import {createToken} from '../util/jwt.js';

export const register = async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
    
  
    try {
      const user = await UserModel.create({
        username: username,
        password,
      });
      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
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
    // por numa variavel o user id encontrado
    const token = user.id;
    return res.json({ token });

  };