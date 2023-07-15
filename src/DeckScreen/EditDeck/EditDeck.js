import React from 'react'

import EditDeckForm from './EditDeckForm'
import EditDeckNav from './EditDeckNav'

function EditDeck({ deck, loadDeck }) {
    return (
        <>
            <EditDeckNav deck={deck} />
            <h1>Edit Deck</h1>
            <EditDeckForm deck={deck} loadDeck={loadDeck}/>
        </>
    )
}

export default EditDeck