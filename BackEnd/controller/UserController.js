import User from "../model/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userById = await User.findById(req.params.id);
    res.json(userById);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const saveUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const insertUser = await user.save();
    res.status(201).json(insertUser);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateUser);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteUser);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
