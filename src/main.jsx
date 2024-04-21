import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./App";
import "./index.css";
import "./assets/general-sans.css";
import WalletContextProvider from "./components/ConnectWallet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WalletContextProvider>
      <RouterProvider router={router} />
    </WalletContextProvider>
  </React.StrictMode>
);
