import GetSingleUserRequestController from "../controllers/request/getSingleUserRequestController";
import UpdateIsReadRequestController from "../controllers/request/updateIsReadRequestController";
import GetAllRequestController from "../controllers/request/getAllRequestController";
import AssignRequestController from "../controllers/request/assignRequestController";
import CancelRequestController from "../controllers/request/cancelRequestController";
import SendRequestController from "../controllers/request/sendRequestController";
import { authenticateToken } from "../middlewares/authenticateToken";
import { validateRequest } from "../middlewares/validateRequest";
import { assignRequestInputSchema } from "../joi/assign.joi";
import { cancelRequestInputSchema } from "../joi/cancel.joi";
import { sendRequestInputSchema } from "../joi/send.joi";
import { Router } from "express";
import GetUserRequestController from "../controllers/request/getUserRequestController";

const requestRouters = Router();

requestRouters.use(authenticateToken);

requestRouters.post(
  "/assign",
  validateRequest(assignRequestInputSchema),
  AssignRequestController
);

requestRouters.get("/", GetAllRequestController);

requestRouters.get("/user", GetUserRequestController);

requestRouters.get("/user/:id", GetSingleUserRequestController);

requestRouters.get("/isread/:id", UpdateIsReadRequestController);

requestRouters.post(
  "/cancel",
  validateRequest(cancelRequestInputSchema),
  CancelRequestController
);

requestRouters.post(
  "/send",
  validateRequest(sendRequestInputSchema),
  SendRequestController
);

export default requestRouters;
