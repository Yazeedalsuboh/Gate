import { Router } from "express";
const rootRouter = Router();

import orderRouter from "./order.js";

rootRouter.use("/order", orderRouter);

export default rootRouter;
