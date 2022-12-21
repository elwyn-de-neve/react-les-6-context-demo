import React, { useContext } from 'react';
import { ClickContext } from "../context/ClickContext";

function Result() {
    // 7. Abonneren op de context die je wilt gebruiken
    const { clicks } = useContext( ClickContext )

    return (
        <h2>Het resultaat is: { clicks }</h2>
    );
}

export default Result;