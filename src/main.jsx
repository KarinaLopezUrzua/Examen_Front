import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
//import { ContextGlobal, ContextProvider, initialState } from './Components/Context/global.context'

//TODO: VER LO DE CONTEXTGLOBAL
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>
);
