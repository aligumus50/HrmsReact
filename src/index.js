import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./layouts/root/App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";

const store = configureStore()
ReactDOM.render(
  //rendere 2 tane parametre gönderdik. (component ve root)
  //app componentini root a gönder demek.
  //app altınada componentleri oluşturak hiyerarşiyi oluşturuyoruz.
  //route işlemi bu appde desteklenecek.
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
