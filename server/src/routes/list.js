import { Router } from "express";

import { addOrder, deleteOrder, getAll, getList } from "../controllers/list.js";
const listRouter = Router();

listRouter.get("/", getAll);
listRouter.get("/:list", getList);
listRouter.post("/order", addOrder);
listRouter.delete("/order/:code", deleteOrder);

export default listRouter;
