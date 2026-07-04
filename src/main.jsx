import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import GoalProvider from "./context/GoalContext";

createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
    <GoalProvider>
      <App />
      </GoalProvider>
    </BrowserRouter>
 
);