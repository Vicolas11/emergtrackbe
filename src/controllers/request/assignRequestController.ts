import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import { genRanNum } from "../../utils/random.gen.utils";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const AssignRequestController = catchAsync(
  async (req: Request, res: Response) => {
    const {
      id,
      driverEmail,
      riderEmail,
      userEmail,
      location,
      brand,
      color,
      plate_num,
    } = req.body;
    const role = req.user?.role;

    if (role !== "Admin")
      return errorResponse({
        message: "Can't perform this. Not an Admin!",
        status: 403,
        res,
      });

    try {
      const request = await prisma.request.findFirst({
        where: { AND: [{ id }] },
        include: { user: true },
      });

      if (!request) {
        return errorResponse({
          message: "Request not found!",
          status: 404,
          res,
        });
      }

      const { user: reqUser, location: reqLoc } = request;

      if (reqLoc !== location) {
        return errorResponse({
          message: "Invalid location provided!",
          status: 400,
          res,
        });
      }

      if (reqUser.email !== userEmail) {
        return errorResponse({
          message: "User email provided doesn't correspond!",
          status: 400,
          res,
        });
      }

      const driver = await prisma.user.findFirst({
        where: { AND: [{ email: driverEmail }] },
      });

      if (!driver) {
        return errorResponse({
          message: "Driver record not found!",
          status: 404,
          res,
        });
      }

      const rider = await prisma.user.findFirst({
        where: { AND: [{ email: riderEmail }] },
      });

      if (!rider) {
        return errorResponse({
          message: "Rider record not found!",
          status: 404,
          res,
        });
      }

      const user = await prisma.user.findFirst({
        where: { AND: [{ email: userEmail }] },
      });

      if (!user) {
        return errorResponse({
          message: "User record not found!",
          status: 404,
          res,
        });
      }

      if (driver.role !== "Driver")
        return errorResponse({
          message: "This user is not a Driver",
          status: 404,
          res,
        });

      if (rider.role !== "Rider")
        return errorResponse({
          message: "This user is not a Rider",
          status: 404,
          res,
        });

      if (user.role !== "User")
        return errorResponse({
          message: "This user is not a User",
          status: 404,
          res,
        });

      const { status } = request;

      if (status !== "Pending") {
        return errorResponse({
          message: `Request has been ${status}`,
          status: 400,
          res,
        });
      }

      const updateRequest = await prisma.request.update({
        where: { id },
        data: {
          status: "Granted",
          driver: { connect: { email: driverEmail } },
          rider: { connect: { email: riderEmail } },
        },
        include: {
          user: true,
          driver: true,
          rider: true,
        },
      });

      // Create Message for User, Driver and Rider
      await prisma.message.create({
        data: {
          messageId: genRanNum(),
          title: `Request Granted`,
          sender: role,
          content: `Hello ${user.firstName}! \nYour request has been approved. The driver, ${driver.firstName} ${driver.lastName} (+${driver.phone}), and the rider, ${rider.firstName} ${rider.lastName} (+${rider.phone}), have been notified, and they are on their way right now!`,
          userId: user.id,
        },
      });

      await prisma.message.create({
        data: {
          messageId: genRanNum(),
          title: `Request Granted`,
          sender: role,
          content: `Hello, ${driver.firstName}! \nYou have been assigned as the driver for ${user.firstName} ${user.lastName}, with ${rider.firstName} ${rider.lastName} (+${rider.phone}) as the rider. Please report immediately to this address: ${location}. Locate a ${color} ${brand} with the plate number ${plate_num}. You must accompany the rider and contact the client at +${user.phone}.`,
          userId: driver.id,
        },
      });

      await prisma.message.create({
        data: {
          messageId: genRanNum(),
          title: `Request Granted`,
          sender: role,
          content: `Hello, ${rider.firstName}! \nYou have been assigned as the rider for ${user.firstName} ${user.lastName}, with ${driver.firstName} ${driver.lastName} (+${driver.phone}) as the driver. Please report immediately to this address: ${location}. Locate a ${color} ${brand} with the plate number ${plate_num}. You must accompany the driver and contact the client at +${user.phone}.`,
          userId: rider.id,
        },
      });

      return successResponse({
        message: `Request has been assigned and granted successfully`,
        data: updateRequest,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to assigned request",
        status: 500,
        res,
      });
    }
  }
);

export default AssignRequestController;
