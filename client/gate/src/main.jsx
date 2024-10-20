import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import FormOrder from "./components/orders/FormOrder.jsx";
import ListOrders from "./components/orders/ListOrders.jsx";
import Info from "./components/main/Info.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />,
		children: [
			{
				path: "/",
				element: <ListOrders />,
			},
			{
				path: "/add",
				element: <FormOrder />,
			},
			{
				path: "/info",
				element: <Info />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</Provider>
	</StrictMode>
);
