import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetSingleUserRequestController = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;
    const role = req.user?.role;
    const { id } = req.params;

    try {
      const request = await prisma.request.findFirst({
        where: { AND: [{ id }] },
        include: {
          user: true,
          rider: true,
          driver: true,
        },
      });

      if (!request) {
        return errorResponse({
          message: "Request not found!",
          status: 404,
          res,
        });
      }

      if (request.userId !== userId && role !== "Admin") {
        return errorResponse({
          message: "Can't perform this!",
          status: 403,
          res,
        });
      }

      return successResponse({
        message: "Fetch successfully!",
        data: request,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to get request!",
        status: 500,
        res,
      });
    }
  }
);

export default GetSingleUserRequestController;
