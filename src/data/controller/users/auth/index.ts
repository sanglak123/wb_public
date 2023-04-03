import { Request, Response } from "express";
import { setCookie, deleteCookie } from "cookies-next";
import bcryptjs from "bcryptjs";
import db from "@/data/db/models";
import {
  CreateAccessToken,
  CreateRefreshToken,
} from "@/data/config/token_create";

const DB: any = db;
const { Users } = DB;

export const UserAuthController = {
  Sign_In: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      const userLogin = await Users.findOne({
        where: {
          username: username,
        },
      });

      if (userLogin) {
        if (bcryptjs.compareSync(password, userLogin.password)) {
          const newAccessToken = CreateAccessToken(userLogin);
          const newRefreshToken = CreateRefreshToken(userLogin);

          setCookie("refreshToken", newRefreshToken, {
            req,
            res,
            httpOnly: true,
            secure: true,
            path: "/",
            sameSite: "strict",
            maxAge: 60 * 1000 * 60 * 24,
          });
          userLogin.password = null;
          return res
            .status(200)
            .json({ User: userLogin, accessToken: newAccessToken });
        } else {
          return res.status(400).json({ error: "Password fail!" });
        }
      } else {
        return res.status(404).json({ error: "User not found!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Sign_Up: async (req: Request, res: Response) => {
    try {
      const { username, password, email } = req.body;
      const [user, created] = await Users.findOrCreate({
        where: {
          username: username,
        },
      });
      if (!created) {
        return res.status(400).json({ error: "User already exits!" });
      } else {
        const salt = bcryptjs.genSaltSync(10);
        const newPass = bcryptjs.hashSync(password, salt);
        user.set({
          password: newPass,
          email: email,
        });
        await user.save().then((newUser: any) => {
          newUser.password = null;
          return res
            .status(201)
            .json({ mess: "Register success!", User: newUser });
        });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Sign_Out: async (req: Request, res: Response) => {
    try {
      deleteCookie("refreshToken", { req, res });
      return res.end();
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
