import { Router } from "express";
const rootRouter = Router();

import listRouter from "./list.js";

rootRouter.use("/list", listRouter);

export default rootRouter;
