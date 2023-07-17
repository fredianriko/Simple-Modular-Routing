import express from "express";
import { register } from "../../controller/user/userController.js";

const userRouter = express.Router();

userRouter.get("/first", register);

export { userRouter };
