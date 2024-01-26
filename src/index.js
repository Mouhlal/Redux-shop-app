import React from "react";
import ReactDOM from "react-dom/client";
/* import App from './App';*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
/* import AppForm from './AppForm'; */
import AppContatc from "./AppContatc";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import RedContact from "./Contact/Store";
import Appusers from "./Appusers";
import Mareducer from "./Projet/Reducer";
//import AppRx from './AppRx';
//import Re from './Exercice1/Reducer';


//const str = legacy_createStore(RedContact)

//const store = legacy_createStore(Re)

const store5 = legacy_createStore(Mareducer)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /*   <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode> */

  /* <Provider store={store}>
      <AppRx />
</Provider>  */

  /* <Provider store={store}>
  <AppEx2 />
</Provider>
 */

 /*  <BrowserRouter>
    <Provider store={str} >
      <AppContatc />
    </Provider>
  </BrowserRouter> */

  <Provider store={store5}>
    <Appusers />
  </Provider>
);
