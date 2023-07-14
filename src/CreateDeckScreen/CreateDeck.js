import React from "react"
import CreateDeckForm from "./CreateDeckForm"
import CreateDeckNav from "./CreateDeckNav"

function CreateDeck() {
    return (
        <>
            <CreateDeckNav />
            <h1>Create Deck</h1>
            <CreateDeckForm />
        </>
    )
}

export default CreateDeck