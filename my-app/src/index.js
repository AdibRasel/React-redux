import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap Css 
import "./Src/Assets/Css/Bootstrap.Main.css"

import App from './App';

// Redux React Redux 
import { Provider } from 'react-redux';
import Store from './Src/Redux/Store/Store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      
      <App />

    </Provider>
  </React.StrictMode>
);

