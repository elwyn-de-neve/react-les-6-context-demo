// 1. Maak de context aan
import { createContext, useState } from "react";

export const ClickContext = createContext( {} )

// 2. Maak een custom provider component aan
function ClickContextProvider( { children } ) {

    // 4. Bijhouden van onze click in een stukje state
    const [ amountOfClicks, setAmountOfClicks ] = useState( 0 );

    // 5. Functies schrijven om de clicks te verhogen en te verlagen
    function addOne(){
        setAmountOfClicks( amountOfClicks + 1)
    }

    function minusOne(){
        setAmountOfClicks( amountOfClicks - 1)
    }

    // 6. Data object aanmaken en vullen met alle variabelen die we toegankelijk willen maken
    const data = {
        clicks: amountOfClicks,
        addOneFunction: addOne,
        minusOneFunction: minusOne
    }

    return (
        <ClickContext.Provider value={ data }>
            { children }
        </ClickContext.Provider>
    )
}

export default ClickContextProvider;

