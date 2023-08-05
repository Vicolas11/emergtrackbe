import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetAllRidersController = catchAsync(
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

    const totalCount = await prisma.user.count({ where: { role: "Rider" } });
    const totalPages = Math.ceil(totalCount / limitNum);

    try {
      const riders = await prisma.user.findMany({
        where: { role: "Rider" },
        orderBy: { createAt: "desc" },
        take: limitNum,
        skip: offset,
      });

      riders.map((rider) => Reflect.deleteProperty(rider, "password"));

      const riderCount = await prisma.user.count({
        where: { role: "Rider" },
      });

      return successResponse({
        message: "Fetch successfully",
        data: riders,
        res,
        other: {
          totalCount,
          totalPages,
          riderCount,
        },
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to get riders",
        status: 500,
        res,
      });
    }
  }
);

export default GetAllRidersController;
