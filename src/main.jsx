import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
import { AppContextProvider } from "./context/Context";
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
