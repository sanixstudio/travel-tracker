const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: [3, "Username must be at least 3 letter"],
      max: [20, "20 is max character limit"],
    },
    email: {
      type: String,
      require: true,
      unique: true,
      max: [40, "40 is max character limit"],
    },
    password: {
      type: String,
      require: true,
      min: 3,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
