import { Router } from "express";

import { addOrder, getAll, getList } from "../controllers/list.js";
const listRouter = Router();

listRouter.get("/", getAll);
listRouter.get("/:list", getList);
listRouter.post("/order", addOrder);

export default listRouter;
