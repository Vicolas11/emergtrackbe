import GetSingleUserMessageController from "../controllers/message/getSingleUserMessageController";
import UpdateIsReadMessageController from "../controllers/message/updateIsReadMessageController";
import GetUserMessageController from "../controllers/message/getUserMessageController";
import GetAllMessageController from "../controllers/message/getAllMessageController";
import { authenticateToken } from "../middlewares/authenticateToken";
import { Router } from "express";

const messageRouters = Router();

messageRouters.use(authenticateToken);

messageRouters.get("/user", GetUserMessageController);

messageRouters.get("/user/:id", GetSingleUserMessageController);

messageRouters.get("/", GetAllMessageController);

messageRouters.get("/isread/:id", UpdateIsReadMessageController);

export default messageRouters;
