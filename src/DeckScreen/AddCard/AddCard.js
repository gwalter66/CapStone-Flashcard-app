import React from "react"

import AddCardForm from "./AddCardForm"
import AddCardNav from "./AddCardNav"

function AddCard({ deck }) {
    return (
        <>
            <AddCardNav deck={deck} />
            <h1>{deck.name}: Add Card</h1>
            <AddCardForm deck={deck} />
        </>
    )
}

export default AddCard