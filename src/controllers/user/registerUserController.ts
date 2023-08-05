import { genRandomNum, genRandomUsername } from "../../utils/random.gen.utils";
import { successResponse } from "../../utils/successResponse";
import { errorResponse } from "../../utils/errorResponse";
import { titleCase } from "../../utils/titleCase.util";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { prisma } from "../../server";
import bcrypt from "bcryptjs";

const RegisterUserController = catchAsync(
  async (req: Request, res: Response) => {
    const { firstName, lastName, role, email, password, phone } = req.body;
    const newRole = titleCase(role)

    try {
      // Check if user with the same email already exists
      const existingUser = await prisma.user.findUnique({ where: { email } });

      if (existingUser) {
        return errorResponse({
          message: "User already exists",
          status: 409,
          res,
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      if (newRole !== "Driver" && newRole !== "Rider" && newRole !== "User") {
        return errorResponse({
          message: "Invalid role",
          status: 400,
          res,
        });
      }

      const genUserId = () => {
        let result = "";
        switch (newRole) {
          case "Driver":
            result = `EMERG${genRandomNum()}D`;
            break;
          case "Rider":
            result = `EMERG${genRandomNum()}R`;
            break;
          default:
            result = `EMERG${genRandomNum()}`;
        }
        return result;
      };

      // Create the new user
      const newUser = await prisma.user.create({
        data: {
          firstName: titleCase(firstName),
          lastName: titleCase(lastName),
          username: genRandomUsername(firstName, lastName),
          userId: genUserId(),
          email,
          role: newRole,
          password: hashedPassword,
          phone,
        },
      });

      // Remove the password field for security reasons
      Reflect.deleteProperty(newUser, "password");

      return successResponse({
        message: "Signed up successfully!",
        data: newUser,
        status: 201,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to sign up user",
        status: 500,
        res,
      });
    }
  }
);

export default RegisterUserController;
