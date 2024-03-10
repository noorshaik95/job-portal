import {
  EMAIL_KEY,
  EMAIL_REQUIRED_MESSAGE,
  FIRST_NAME_KEY,
  FIRST_NAME_REQUIRED_MESSAGE,
  LAST_NAME_KEY,
  LAST_NAME_REQUIRED_MESSAGE,
  PASSWORD_KEY,
  PASSWORD_NOT_MATCHING_MESSAGE,
  PASSWORD_NOT_STRONG_MESSAGE,
  PASSWORD_REGEX,
  PASSWORD_REQUIRED_MESSAGE,
  RETYPE_PASSWORD_KEY,
  RETYPE_PASSWORD_REQUIRED_MESSAGE,
} from "../constants.js";

export const validateUser = (user) => {
  const err = [];
  if (!user.firstName || user.firstName === "") {
    err.push({
      key: FIRST_NAME_KEY,
      message: FIRST_NAME_REQUIRED_MESSAGE,
    });
  }
  if (!user.lastName || user.lastName === "") {
    err.push({
      key: LAST_NAME_KEY,
      message: LAST_NAME_REQUIRED_MESSAGE,
    });
  }
  if (!user.email || user.email === "") {
    err.push({
      key: EMAIL_KEY,
      message: EMAIL_REQUIRED_MESSAGE,
    });
  }
  if (!user.password || user.password === "") {
    err.push({
      key: PASSWORD_KEY,
      message: PASSWORD_REQUIRED_MESSAGE,
    });
  }
  if (!user.retypePassword || user.retypePassword === "") {
    err.push({
      key: RETYPE_PASSWORD_KEY,
      message: RETYPE_PASSWORD_REQUIRED_MESSAGE,
    });
  }
  if (user.password !== user.retypePassword) {
    err.push({
      key: RETYPE_PASSWORD_KEY,
      message: PASSWORD_NOT_MATCHING_MESSAGE,
    });
  }
  if (!PASSWORD_REGEX.test(user.password)) {
    err.push({
      key: PASSWORD_KEY,
      message: PASSWORD_NOT_STRONG_MESSAGE,
    });
  }
  return err;
};
