import React, { useContext } from 'react';
import { ClickContext } from "../context/ClickContext";

function AddButton() {
    // 7. Abonneren op de context die je wilt gebruiken
    const { addOneFunction } = useContext( ClickContext )

    return (
        <button type="button" onClick={ addOneFunction }>
            +
        </button>
    );
}

export default AddButton;