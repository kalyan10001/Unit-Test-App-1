import { User } from "../models/user.model.js";

export const GetUser=async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const AddUser=async (req, res) => {
    try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const user = new User({ name, email });
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

