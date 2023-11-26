import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Article from "./pages/Article";
import MathTest from "./pages/MathTest";
import HttpTest from "./pages/HttpTest";

const container = document.getElementById("root");
const root = createRoot(container!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Article",
    element: <Article />,
  },
  {
    path: "/math",
    element: <MathTest />,
  },
  {
    path: "/http",
    element: <HttpTest />,
  },
]);

root.render(<RouterProvider router={router} />);
