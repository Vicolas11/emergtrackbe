import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetUserMessageController = catchAsync(
  async (req: Request, res: Response) => {
    let { page, limit } = req.query;
    const userId = req.user?.id;
    const role = req.user?.role;
    const limitNum = +(limit as string) || 10;
    const pgNum = +(page as string) || 1;
    const offset = (pgNum - 1) * limitNum;

    const totalCount = await prisma.message.count({
      where: { userId },
    });

    const totalPages = Math.ceil(totalCount / limitNum);

    try {
      const messages = await prisma.message.findMany({
        where: { OR: [{ userId }] },
        orderBy: { date: "desc" },
        take: limitNum,
        skip: offset,
        include: {
          user: true,
        },
      });

      const msgCount = await prisma.message.count({
        where: { AND: [{ userId }, { isRead: false }] },
      });

      return successResponse({
        message: "Fetch successfully",
        data: messages,
        res,
        other: {
          totalCount,
          totalPages,
          msgCount,
        },
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to get messages",
        status: 500,
        res,
      });
    }
  }
);

export default GetUserMessageController;
