export const FIRST_NAME_KEY = "firstName";
export const LAST_NAME_KEY = "lastName";
export const PASSWORD_KEY = "password";
export const EMAIL_KEY = "email";
export const RETYPE_PASSWORD_KEY = "retypePassword";
export const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

export const FIRST_NAME_REQUIRED_MESSAGE = "First Name is required!";
export const LAST_NAME_REQUIRED_MESSAGE = "Last Name is required!";
export const EMAIL_REQUIRED_MESSAGE = "Email is required!";
export const EMAIL_ALREADY_EXISTS_MESSAGE = "Email already exists!";
export const PASSWORD_REQUIRED_MESSAGE = "Password is required!";
export const RETYPE_PASSWORD_REQUIRED_MESSAGE = "Retype Password is required!";
export const PASSWORD_NOT_MATCHING_MESSAGE =
  "Password and Retype Password are not matching!";
export const PASSWORD_NOT_STRONG_MESSAGE = "Password is not strong!";
export const USER_NOT_FOUND = "User does not exists!";
export const USER_NOT_MATCHING = "Username/Password not matching!";
export const ACCOUNT_CREATED = "Account Created!";

export const BAD_REQUEST = 400;
export const SUCCESS = 200;
export const UNAUTHORISED = 401;

export const JWT_ALGORITHM = "HS512";
export const JWT_ACCESS_TOKEN_EXPIRES_IN = 3600;
export const JWT_REFRESH_TOKEN_EXPIRES_IN = 3600000;

export const SALT_ROUND = 10;
