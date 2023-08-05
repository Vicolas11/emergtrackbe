import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import { titleCase } from "../../utils/titleCase.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";
import { genRanNum } from "../../utils/random.gen.utils";

const SendMessageController = catchAsync(
  async (req: Request, res: Response) => {
    const { userId, driverEmail, riderEmail } = req.body;
    const user = req.user as IJWTCustom;
    const id = user.id;
    const role = user.role;

    if (role !== "Admin") {
      return errorResponse({
        message: "Can't perform this not an Admin!",
        status: 403,
        res,
      });
    }

    try {
      const user = await prisma.user.findFirst({
        where: { OR: [{ id: userId }] },
      });

      if (!user) {
        return errorResponse({
          message: "User record not found",
          status: 404,
          res,
        });
      }

      const newMessage = await prisma.message.create({
        data: {
          messageId: genRanNum(),
          title: `Request Granted`,
          sender: role,
          content: `Hello ${user.firstName}! Your request has been approved. The driver, Luke Jones (08056451234), and the rider, Philip John (09031245689), have been notified, and they are on their way right now!`,
          userId: id,
        },
      });

      return successResponse({
        message: "Message sent successfully!",
        data: newMessage,
        status: 201,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to create request",
        status: 500,
        res,
      });
    }
  }
);

export default SendMessageController;
