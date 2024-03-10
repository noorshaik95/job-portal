import { validateUser } from "../../utils/validate.js";
import { UserModel } from "../../models/User/index.js";
import {
  ACCOUNT_CREATED,
  BAD_REQUEST,
  EMAIL_ALREADY_EXISTS_MESSAGE,
  EMAIL_KEY,
  SUCCESS,
  USER_NOT_FOUND,
  USER_NOT_MATCHING,
} from "../../constants.js";
import { hashPassword, verifyPassword } from "../../utils/auth.js";
import { AccessTokenModel } from "../../models/AuthToken/index.js";
import { RefreshTokenModel } from "../../models/RefreshToken/index.js";

const register = async (req, res) => {
  const user = { ...req.body };
  const err = validateUser(user);
  if (err.length > 0) {
    res.status(BAD_REQUEST).json({
      err,
    });
    return;
  }
  const isUserExists = await UserModel.findUserByEmail(user.email);
  if (isUserExists) {
    res.status(BAD_REQUEST).json({
      err: [
        {
          key: EMAIL_KEY,
          message: EMAIL_ALREADY_EXISTS_MESSAGE,
        },
      ],
    });
    return;
  }
  const newUser = new UserModel(user);
  [newUser.password, newUser.salt] = await hashPassword(newUser.password);
  await newUser.save();
  res.status(SUCCESS).json({
    message: ACCOUNT_CREATED,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findUserByEmail(email);
  if (!user) {
    res.status(BAD_REQUEST).json({
      err: [
        {
          key: EMAIL_KEY,
          message: USER_NOT_FOUND,
        },
      ],
    });
    return;
  }

  if (!verifyPassword(password, user.salt, user.password)) {
    res.status(BAD_REQUEST).json({
      err: [
        {
          key: EMAIL_KEY,
          message: USER_NOT_MATCHING,
        },
      ],
    });
    return;
  }
  const accessToken = await AccessTokenModel.createToken(user);
  const refreshToken = await RefreshTokenModel.createToken(user);
  const response = {
    accessToken: accessToken.payload,
    refreshToken: refreshToken.payload,
  };
  res.status(SUCCESS).json(response);
};

export { register, login };
