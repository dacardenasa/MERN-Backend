const userHandler = {};
const User = require("../models/User");

userHandler.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
};

userHandler.createUser = async (req, res) => {
  const { username } = req.body;
  const user = new User({ username });
  try {
    await user.save();
    res.json({ message: "User created succesfully!"})
  } catch (error) {
    res.json({ message: error });
  }
};

userHandler.deleteUser = async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "User deleted succesfully!"})
  } catch (error) {
    res.json({ message: error });
  }
}; 

module.exports = userHandler;