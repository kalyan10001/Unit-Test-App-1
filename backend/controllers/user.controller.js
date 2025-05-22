import { User } from "../models/user.model.js";

export const GetUser=async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const AddUser=async (req, res) => {
  try {
    const user = new user(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const DeleteUser= async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};

