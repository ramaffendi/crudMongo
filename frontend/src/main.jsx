import App from "./App";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
