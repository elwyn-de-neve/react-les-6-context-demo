import { createContext, useState } from "react";

export const LanguageContext = createContext({})

function LanguageContextProvider({ children }) {
    const [ language, setLanguage ] = useState("NL");

    function toggleLanguage(){
        if(language === "NL"){
            setLanguage("EN")
        } else {
            setLanguage("NL")
        }
    }

    const data = {
        language, // Als de key en value exact hetzelfde zijn kan je ipv 'language: language' het ook zo uitschrijven
        toggleLanguage //Hier geldt dus hetzelfde
    }

    return (
        <LanguageContext.Provider value={ data }>
            { children }
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;