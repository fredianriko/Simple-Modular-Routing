import { Router } from "express";
import { userRouter } from "./user/user-route.js";
import { contactRouter } from "./contact/contact-route.js";

const router = Router();

router.use(userRouter);
router.use(contactRouter);

//add other router below, this way is more simpler

export default router;
