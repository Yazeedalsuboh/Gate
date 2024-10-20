import { configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "../features/orderSlice";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
	reducer: {
		order: orderSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
