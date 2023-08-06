import { Secret } from "jsonwebtoken";

export interface IConstant {
  secretKey: string;
  expiresIn: string;
  refreshIn: string;
  logoLink: string;
}
