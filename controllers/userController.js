import { User } from "../models/user.js";
import bcrypt from "bcrypt";

// const hashPassword = (password) => {
//   bcrypt.hash(password, 10)
//     .then((hashedPassword) => { res.json(ha) })
// }

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json(error);
  }
};

// const createUser = (req, res) => {
//   bcrypt.hashSync(req.body.user.password, 10)
//   .then((hashedPassword) => {
//     req.body.user.password = hashedPassword
//     User.create(req.body.user)
//       .then((newUser) => {
//         res.status(200).json({ user: newUser })
//       })
//       .catch((error) => {
//         res.status(500).json(error)
//       })
//   })
//   .catch((error) => {res.status(500).json(error)})
// }

const createUser = async (req, res) => {
  try {
    const userInformation = req.body.user;
    userInformation.password = bcrypt.hashSync(
      userInformation.password,
      10
    );
    const newUser = await User.create(userInformation);
    res.status(200).json({ user: newUser });
  } catch (error) {
    res.status(406).json(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ user: updatedUser });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ user: deletedUser });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getAllUsers, getUserById, createUser, updateUserById, deleteUserById };
