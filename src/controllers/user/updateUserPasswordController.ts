import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";
import bcrypt from "bcryptjs";

const UpdateUserPasswordController = catchAsync(
  async (req: Request, res: Response) => {
    const { oldpassword, newpassword } = req.body;
    const userId = req.user?.id;

    try {
      // Check if the user exists
      const user = await prisma.user.findFirst({
        where: { OR: [{ id: userId }] },
      });

      if (!user) {
        return errorResponse({
          message: "User doesn't exists!",
          status: 404,
          res,
        });
      }

      const { id, password } = user;

      if (userId !== id) {
        return errorResponse({
          message: "Not allowed to perform this!",
          status: 403,
          res,
        });
      }

      const isValid = await bcrypt.compare(oldpassword, password);

      if (!isValid) {
        return errorResponse({
          message: "Incorrect password provided!",
          status: 400,
          res,
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(newpassword, 10);

      const updatePassword = await prisma.user.update({
        where: { id },
        data: { password: hashedPassword },
      });

      Reflect.deleteProperty(updatePassword, "password");

      return successResponse({
        message: "Updated password successfully!",
        data: updatePassword,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "An error occurred",
        status: 500,
        res,
      });
    }
  }
);

export default UpdateUserPasswordController;
