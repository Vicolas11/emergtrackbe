import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const UpdateIsReadRequestController = catchAsync(
  async (req: Request, res: Response) => {
    let { id } = req.params;
    const userId = req.user?.id;
    const role = req.user?.role;

    try {
      const request = await prisma.request.findFirst({
        where: { AND: [{ id }] },
        include: {
          user: true,
          rider: true,
          driver: true,
        },
      });

      if (!request)
        return errorResponse({
          message: "Request record not found",
          status: 404,
          res,
        });

      if (request.userId !== userId && role !== "Admin") {
        return errorResponse({
          message: "Can't perform this!",
          status: 403,
          res,
        });
      }

      const newReq = await prisma.request.update({
        where: { id },
        data: { isRead: true },
      });

      return successResponse({
        message: "Fetch successfully",
        data: newReq,
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

export default UpdateIsReadRequestController;
