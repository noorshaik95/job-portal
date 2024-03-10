import mongoose, { model } from "mongoose";
import { userSchema } from "./schema.js";

userSchema.statics.findUserByEmail = function (email) {
  return mongoose.model("User").findOne({ email });
};

const UserModel = model("User", userSchema);

export { UserModel };
