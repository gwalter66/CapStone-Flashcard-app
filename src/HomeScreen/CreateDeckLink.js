import React from "react"
import { Link } from 'react-router-dom'

function CreateDeckLink() {
    return (
        <>
            <Link to='/decks/new'>Create Deck</Link>            
        </>
    )
}

export default CreateDeckLink