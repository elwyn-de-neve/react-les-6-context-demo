import React, { useContext } from 'react';
import { ClickContext } from "../context/ClickContext";

function MinusButton() {
    // 7. Abonneren op de context die je wilt gebruiken
    const { minusOneFunction } =useContext(ClickContext)

  return (
    <button type="button" onClick={ minusOneFunction }>
      -
    </button>
  );
}

export default MinusButton;