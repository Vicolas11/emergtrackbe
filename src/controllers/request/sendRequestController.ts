import { rmSpecialCharacters } from "../../utils/rmcharacter.util";
import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import { titleCase } from "../../utils/titleCase.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const SendRequestController = catchAsync(
  async (req: Request, res: Response) => {
    const { plate_num, brand, vin, color, location, info } = req.body;
    const user = req.user as IJWTCustom;
    const userId = user.id;
    const role = user.role;

    try {
      const user = await prisma.user.findFirst({
        where: { OR: [{ id: userId }] },
      });

      if (!user) {
        return errorResponse({ message: "User not found", status: 404, res });
      }

      if (role !== "User") {
        return errorResponse({
          message: "Can't perform this not a user!",
          status: 403,
          res,
        });
      }

      if (userId !== user.id) {
        return errorResponse({
          message: "Can't perform this operation!",
          status: 403,
          res,
        });
      }

      const newRequest = await prisma.request.create({
        data: {
          vin: `${vin}`.toUpperCase(),
          plate_num: rmSpecialCharacters(plate_num),
          color,
          brand,
          location: titleCase(location),
          info,
          userId,
        },
      });

      return successResponse({
        message: "Request created successfully!",
        data: newRequest,
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

export default SendRequestController;
