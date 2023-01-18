const user = require("../models/user");

module.exports = {
  getAll: async (req, res) => {
    const users = await user.find().exec();
    res.status(200).json(users);
  },
};
