import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetSingleUserMessageController = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;
    const { id } = req.params;

    try {
      const message = await prisma.message.findFirst({
        where: { AND: [{ id }] },
      });      

      if (!message) {
        return errorResponse({
          message: "Message record not found!",
          status: 404,
          res,
        });
      }

      if (message.userId !== userId) {
        return errorResponse({
          message: "Can't perform this!",
          status: 403,
          res,
        });
      }

      return successResponse({
        message: "Fetch successfully!",
        data: message,
        res
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to get message!",
        status: 500,
        res,
      });
    }
  }
);

export default GetSingleUserMessageController;
