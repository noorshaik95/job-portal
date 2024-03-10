import { model } from "mongoose";
import { AccessTokenSchema } from "./schema.js";
import { generateAccessToken, generateUUID } from "../../utils/auth.js";

AccessTokenSchema.statics.createToken = async function (user) {
  const payload = {
    id: user._id,
  };
  const accessTokenUUID = await generateUUID();
  const accessTokenPayload = await generateAccessToken(
    payload,
    accessTokenUUID
  );
  const accessToken = {
    payload: accessTokenPayload,
    user: user._id,
    secret: accessTokenUUID,
  };
  return this.create(accessToken);
};

const AccessTokenModel = model("AccessToken", AccessTokenSchema);

export { AccessTokenModel };
