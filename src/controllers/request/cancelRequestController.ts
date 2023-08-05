import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const CancelRequestController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    const userId = req.user?.id;
    const role = req.user?.role;

    try {
      const request = await prisma.request.findFirst({
        where: { AND: [{ userId }, { id }] },
      });

      if (!request) {
        return errorResponse({
          message: "Request not found!",
          status: 404,
          res,
        });
      }

      const { status, userId: reqUserId } = request;

      if (userId !== reqUserId)
        return errorResponse({
          message: "Not allowed to perform this!",
          status: 403,
          res,
        });

      if (role !== "User")
        return errorResponse({
          message: "Only users can cancelled request!",
          status: 403,
          res,
        });

      if (status === "Cancelled" || status === "Granted") {
        return errorResponse({
          message: `Request has been ${status}`,
          status: 400,
          res,
        });
      }

      const updateRequest = await prisma.request.update({
        where: { id },
        data: { status: "Cancelled" },
      });

      return successResponse({
        message: `Request has been cancelled successfully`,
        data: updateRequest,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to cancelled request",
        status: 500,
        res,
      });
    }
  }
);

export default CancelRequestController;
