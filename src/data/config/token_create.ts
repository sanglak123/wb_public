import { InterFadeUser } from "@/sp/interfade/User.Type";
import jwt from "jsonwebtoken";

export const CreateAccessToken = (user: InterFadeUser) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      admin: user.admin,
    },
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
    { expiresIn: "300s" }
  );
};

export const CreateRefreshToken = (user: InterFadeUser) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      admin: user.admin,
    },
    process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY as string,
    { expiresIn: "300s" }
  );
};
