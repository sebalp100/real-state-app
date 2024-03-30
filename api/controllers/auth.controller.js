import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      }
    })

    res.status(201).json({ message: "User created!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to create user" });
    console.log(err);
  }


};

export const login = (req, res) => {

};

export const logout = (req, res) => {

};
