import { model } from "mongoose";
import { refreshTokenSchema } from "./schema.js";
import { generateRefreshToken, generateUUID } from "../../utils/auth.js";

refreshTokenSchema.statics.createToken = async function (user) {
  const payload = {
    id: user._id,
  };
  const refreshTokenUUID = await generateUUID();
  const refreshTokenPayload = await generateRefreshToken(
    payload,
    refreshTokenUUID
  );
  const refreshToken = {
    payload: refreshTokenPayload,
    user: user._id,
    secret: refreshTokenUUID,
  };
  return this.create(refreshToken);
};

const RefreshTokenModel = model("RefreshToken", refreshTokenSchema);

export { RefreshTokenModel };
