/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 28/09/2021 - 12:47:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Michael
    * - Modification    : 
**/
import { StrictMode } from "react";
import './index.css';
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
