import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const AuthMeController = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;

    try {
      const user = await prisma.user.findFirst({
        where: { AND: [{ id: userId }] },
      });

      if (!user) {
        return errorResponse({
          message: "User record not found!",
          status: 404,
          res,
        });
      }

      return successResponse({
        message: `Get login user data successfully!`,
        data: user,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to get login user!",
        status: 500,
        res,
      });
    }
  }
);

export default  AuthMeController;
