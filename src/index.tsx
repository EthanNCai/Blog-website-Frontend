import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./pages/TestPage";
import MathTest from "./pages/MathTest";

const container = document.getElementById("root");
const root = createRoot(container!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/TestPage",
    element: <TestPage />,
  },
  {
    path: "/math",
    element: <MathTest />,
  },
]);

root.render(<RouterProvider router={router} />);
