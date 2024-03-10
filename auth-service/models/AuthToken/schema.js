import mongoose, { model } from "mongoose";
const { Schema, Types } = mongoose;

export const AccessTokenSchema = new Schema(
  {
    token: String,
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
    secret: String,
    payload: String,
  },
  { timestamps: true }
);
