import { IConstant } from "../interfaces/constant.interface";
import { config } from "dotenv";

config();

export const constant: IConstant = {
  expiresIn: "2h",
  refreshIn: "3d",
  secretKey: process.env.SECRET_KEY as string,
  logoLink: process.env.UPLOADED_LOGO as string
};
