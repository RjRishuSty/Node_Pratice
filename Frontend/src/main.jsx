import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme.js";

createRoot(document.getElementById("root")).render(
  <SnackbarProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </SnackbarProvider>
);
