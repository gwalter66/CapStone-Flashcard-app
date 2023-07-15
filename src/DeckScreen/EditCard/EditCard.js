import React from "react"

import EditCardForm from "./EditCardForm"
import EditCardNav from "./EditCardNav"

function EditCard({ deck, loadDeck }) {
    return (
        <>
            <EditCardNav deck={deck} />
            <h1>Edit Card</h1>
            <EditCardForm deck={deck} loadDeck={loadDeck} />
        </>
    )
}

export default EditCard