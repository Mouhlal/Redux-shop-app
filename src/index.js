import React from 'react';
import ReactDOM from 'react-dom/client';
/* import App from './App';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css' ;
import {BrowserRouter} from 'react-router-dom'
/* import AppForm from './AppForm'; */
import { Provider } from 'react-redux';
import {legacy_createStore} from 'redux'
import AppRx from './AppRx';
import Re from './Exercice1/Reducer';

const store = legacy_createStore(Re)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*   <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode> */

<Provider store={store}>
      <AppRx />
</Provider>


  );



