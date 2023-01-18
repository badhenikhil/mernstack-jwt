const User = require("../models/user");
module.exports = {
  register: async (req, res, next) => {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email }).exec();
    if (!foundUser) {
      const user = new User({ email, password: User.hashPassword(password) });
      const userDoc = await user.save();
      res.status(201).json(userDoc);
    } else {
      res.status(500).json({ message: "user already exists" });
    }
  },
};
