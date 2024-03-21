import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BackgroundContextProvider } from './components/context/BackgroundContext';

ReactDOM.render(
<BackgroundContextProvider>
    <App/>
</BackgroundContextProvider>
, document.getElementById("root"));