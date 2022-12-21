import React, { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";

const Article = () => {
    const { language } = useContext( LanguageContext );

    return (
        <article>
            <h1>{ language === "NL"
                ? "Dit is een titel"
                : "This is a title" }
            </h1>
            <p>{ language === "NL"
                ? "Dit is een paragraaf tekst "
                : "This is a paragraph text" }
            </p>
        </article>
    );
};

export default Article;