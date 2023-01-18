const User = require("../models/user");
const jwt = require("jsonwebtoken");
module.exports = {
  login: async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email }).exec();
      if (user) {
        if (user.comparePassword(password)) {
          const token = jwt.sign({ username: email }, "mysecret", {
            expiresIn: "1h",
          });
          res.status(200).json({ token });
        } else res.status(401).json({ message: "invalid credential" });
      } else throw new Error("user not registred");
    } catch (exp) {
      res.status(500).json({ message: exp.message });
    }
  },
};
