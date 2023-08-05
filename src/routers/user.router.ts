import UpdateUserPasswordController from "../controllers/user/updateUserPasswordController";
import GetAllDriversController from "../controllers/user/getAllDriversController";
import GetAllRidersController from "../controllers/user/getAllRidersController";
import RegisterUserController from "../controllers/user/registerUserController";
import GetAllUsersController from "../controllers/user/getAllUsersController";
import LoginDriverController from "../controllers/user/loginDriverController";
import UpdateUserController from "../controllers/user/updateUserController";
import LoginRiderController from "../controllers/user/loginRiderController";
import LoginAdminController from "../controllers/user/loginAdminController";
import LoginUserController from "../controllers/user/loginUserController";
import { authenticateToken } from "../middlewares/authenticateToken";
import AuthMeController from "../controllers/user/authMeController";
import { UpdatePasswordInputSchema } from "../joi/update.psd.joi";
import { validateRequest } from "../middlewares/validateRequest";
import { UpdateUserInputSchema } from "../joi/update.user.joi";
import { RegisterInputSchema } from "../joi/register.joi";
import { LoginInputSchema } from "../joi/login.joi";
import { Router } from "express";

const userRouters = Router();

userRouters.post(
  "/login",
  validateRequest(LoginInputSchema),
  LoginUserController
);

userRouters.post(
  "/login/driver",
  validateRequest(LoginInputSchema),
  LoginDriverController
);

userRouters.post(
  "/login/rider",
  validateRequest(LoginInputSchema),
  LoginRiderController
);

userRouters.post(
  "/login/admin",
  validateRequest(LoginInputSchema),
  LoginAdminController
);

userRouters.post(
  "/register",
  validateRequest(RegisterInputSchema),
  RegisterUserController
);

userRouters.use(authenticateToken);

userRouters.post(
  "/update/profile",
  validateRequest(UpdateUserInputSchema),
  UpdateUserController
);

userRouters.post(
  "/update/password",
  validateRequest(UpdatePasswordInputSchema),
  UpdateUserPasswordController
);

userRouters.get("/drivers", GetAllDriversController);

userRouters.get("/riders", GetAllRidersController);

userRouters.get("/users", GetAllUsersController);

userRouters.get("/auth/me", AuthMeController);

export default userRouters;
