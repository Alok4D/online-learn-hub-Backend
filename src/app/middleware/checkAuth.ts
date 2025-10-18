import { JwtPayload } from "jsonwebtoken";
import { envVars } from "../config/envVars";
import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";
import { User } from "../modules/user/user.model";

export const checkAuth =
  (...authRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accessToken = req.headers.authorization;

      if (!accessToken) {
        throw new Error("No Token Recieved");
      }

      const verifiedToken = jwt.verify(
        accessToken,
        envVars.JWT_ACCESS_SECRET
      ) as JwtPayload;

      const isUserExist = await User.findOne({ email: verifiedToken?.email });

      if (!isUserExist) {
        throw new Error("User does not exist");
      }

      if (!authRoles.includes(verifiedToken.role)) {
        throw new Error("You ar not permitted to view this route!!!");
      }

      req.user = verifiedToken;
      next();
    } catch (error) {
      console.log(error);
    }
  };