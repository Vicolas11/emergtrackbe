import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import { titleCase } from "../../utils/titleCase.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const UpdateUserController = catchAsync(async (req: Request, res: Response) => {
  let { firstName, lastName, phone, username, avatar } = req.body;
  const userId = req.user?.id;

  let data = {};

  if (firstName) {
    firstName = titleCase(firstName);
    data = { ...data, firstName };
  }

  if (lastName) {
    lastName = titleCase(lastName);
    data = { ...data, lastName };
  }

  if (phone) {
    data = { ...data, phone };
  }

  if (username) {
    data = { ...data, username };
  }

  if (avatar) {
    data = { ...data, avatar };
  }

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

    const { id } = user;

    if (userId !== id) {
      return errorResponse({
        message: "Not allowed to perform this!",
        status: 403,
        res,
      });
    }

    const updateUser = await prisma.user.update({
      where: { id },
      data,
    });

    Reflect.deleteProperty(updateUser, "password");

    return successResponse({
      message: "Updated user successfully",
      data: updateUser,
      res,
    });
  } catch (err: any) {
    return errorResponse({
      message: err.message || "An error occurred",
      status: 500,
      res,
    });
  }
});

export default UpdateUserController;
