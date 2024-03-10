import mongoose from "mongoose";
const { Schema, Types } = mongoose;

export const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    salt: String,
  },
  { timestamps: true }
);
