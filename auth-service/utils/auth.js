import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import {
  JWT_ACCESS_TOKEN_EXPIRES_IN,
  JWT_ALGORITHM,
  JWT_REFRESH_TOKEN_EXPIRES_IN,
  SALT_ROUND,
} from "../constants.js";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(SALT_ROUND);
  const hashedPassword = await bcrypt.hash(password, salt);
  return [hashedPassword, salt];
};
export const verifyPassword = async (password, salt, userPassword) => {
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword === userPassword;
};

export const generateAccessToken = (payload, uuid) => {
  return jwt.sign(payload, uuid, {
    algorithm: JWT_ALGORITHM,
    expiresIn: JWT_ACCESS_TOKEN_EXPIRES_IN,
  });
};

export const generateRefreshToken = (payload, uuid) => {
  return jwt.sign(payload, uuid, {
    algorithm: JWT_ALGORITHM,
    expiresIn: JWT_REFRESH_TOKEN_EXPIRES_IN,
  });
};

export const generateUUID = () => {
  return crypto.randomUUID();
};
