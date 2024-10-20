import { Router } from "express";
import { getAll, delByCode, add } from "../controllers/order.js";
const orderRouter = Router();

orderRouter.get("/", getAll);
orderRouter.post("/", add);
orderRouter.delete("/:code", delByCode);

export default orderRouter;
