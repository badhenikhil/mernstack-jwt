const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const schema = new Schema({
  email: { type: Schema.Types.String },
  password: { type: Schema.Types.String },
});
schema.statics.hashPassword = function (pass) {
  return bcrypt.hashSync(pass, 10);
};
schema.methods.comparePassword = function (hashedPass) {
  return bcrypt.compareSync(hashedPass, this.password);
};

module.exports = mongoose.model("users", schema);
