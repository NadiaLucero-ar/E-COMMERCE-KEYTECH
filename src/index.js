import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { GlobalStyles } from './global-styles';
import App from './App';



const rootElement = document.getElementById('root');

const root = ReactDOMClient.createRoot(rootElement); root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App /> 
  </React.StrictMode> ,
 );



  


    

