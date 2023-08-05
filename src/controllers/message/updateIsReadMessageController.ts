import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const UpdateIsReadMessageController = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;
    const role = req.user?.role;
    let { id } = req.params;

    try {
      const message = await prisma.message.findFirst({
        where: { AND: [{ id }] },
        include: {
          user: true,
        },
      });

      if (!message)
        return errorResponse({
          message: "Message record not found",
          status: 404,
          res,
        });

      if (message.userId !== userId && role !== "Admin") {
        return errorResponse({
          message: "Can't perform this!",
          status: 403,
          res,
        });
      }

      const newMsg = await prisma.message.update({
        where: { id },
        data: { isRead: true },
      });

      return successResponse({
        message: "Fetch successfully",
        data: newMsg,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to update requests",
        status: 500,
        res,
      });
    }
  }
);

export default UpdateIsReadMessageController;
