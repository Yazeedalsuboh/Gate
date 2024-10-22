import express from "express";
const app = express();
import cors from "cors";

import { PORT } from "./secrets.js";

import { connect } from "./utils/db.js";

import rootRouter from "./routes/index.js";

app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:5173",
	})
);
app.use("/api", rootRouter);

app.listen(PORT, async () => {
	console.log(`Server on http://localhost:${PORT}`);

	await connect();
});
