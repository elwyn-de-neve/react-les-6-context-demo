import React, { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";

const ToggleButton = () => {
    const { language, toggleLanguage } = useContext( LanguageContext );

    return (
        <button type="button" onClick={ toggleLanguage }>
            { language === "NL"
                ? "Toggle naar Engels"
                : "Toggle naar Nederlands" }
        </button>
    );
};

export default ToggleButton;