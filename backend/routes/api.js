const express = require("express");
const router = express.Router();
const registerController = require("../controllers/register");
const loginController = require("../controllers/login");
const usercontroller = require("../controllers/usercontroller");
const jwt = require("jsonwebtoken");

router.get("/", isAuthenticated, usercontroller.getAll);
router.post("/register", registerController.register);
router.post("/login", loginController.login);

function isAuthenticated(req, res, next) {
  try {
    const bearerHeader = req.headers["authorization"];
    if (!bearerHeader) throw new Error("invalid token");
    const [bearer, token] = bearerHeader.split(" ");
    if (token) {
      jwt.verify(token, "mysecret", (err, tokenData) => {
        if (err) throw err;
        else {
          req.username = tokenData.username;
          next();
        }
      });
    }
  } catch (exp) {
    res.status(401).json({ message: exp.message });
  }
}
module.exports = router;
