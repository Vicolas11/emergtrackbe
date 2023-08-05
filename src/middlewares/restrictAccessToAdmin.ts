import { Request } from "../interfaces/request.interface";
import { errorResponse } from "../utils/errorResponse";
import { NextFunction, Response } from "express";

export const restrictAllowToAdmin = (req: Request, res: Response, next: NextFunction) => { 
  const role = req.user?.role;

  if (role !== "Admin") {
    return errorResponse({
      message: "Can't perform this. Not an Admin!",
      status: 403,
      res,
    });
  }

  next();
};
