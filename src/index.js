import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClickContextProvider from "./context/ClickContext";
import LanguageContextProvider from "./context/LanguageContext";

// 3. Wikkel de context provider om het App component heen (zodat alle onderliggende componenten zich mogelijk kunnen abonneren)

ReactDOM.render(
    <React.StrictMode>
        <ClickContextProvider>
            <LanguageContextProvider>
                <App/>
            </LanguageContextProvider>
        </ClickContextProvider>
    </React.StrictMode>,
    document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
