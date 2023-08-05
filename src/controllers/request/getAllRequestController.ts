import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetAllRequestController = catchAsync(
  async (req: Request, res: Response) => {
    let { page, limit } = req.query;
    const role = req.user?.role;
    const limitNum = +(limit as string) || 10;
    const pgNum = +(page as string) || 1;
    const offset = (pgNum - 1) * limitNum;

    if (role !== "Admin") {
      return errorResponse({
        message: "Can't perform this. Not an Admin!",
        status: 403,
        res,
      });
    }

    const totalCount = await prisma.request.count();
    const totalPages = Math.ceil(totalCount / limitNum);

    try {
      const requests = await prisma.request.findMany({
        orderBy: { date: "desc" },
        take: limitNum,
        skip: offset,
        include: {
          user: true,
          rider: true,
          driver: true,
        },
      });

      const reqCount = await prisma.request.count({
        where: { isRead: false },
      });

      return successResponse({
        message: "Fetch successfully",
        data: requests,
        res,
        other: {
          totalCount,
          totalPages,
          reqCount,
        },
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to get requests",
        status: 500,
        res,
      });
    }
  }
);

export default GetAllRequestController;
