import React, { useContext } from 'react';
import './App.css';
import Result from './components/Result';
import MinusButton from './components/MinusButton';
import AddButton from './components/AddButton';
import { LanguageContext } from "./context/LanguageContext";
import Article from "./components/Article";
import ToggleButton from "./components/ToggleButton";

function App() {
    const { language } = useContext( LanguageContext )

    return (
        <>
            <Result/>
            <MinusButton/>
            <AddButton/>
            {/* Onder deze lijn komt de LanguageContext*/}
            <hr/>
            <Article/>
            <ToggleButton/>
        </>
    );
}

export default App;
