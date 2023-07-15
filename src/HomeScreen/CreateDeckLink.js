import React from "react"
import { Link } from 'react-router-dom'

function CreateDeckLink() {
    return (
        <>
            <Link 
                className='btn btn-secondary' 
                to='/decks/new'
            >
               + Create Deck
            </Link>            
        </>
    )
}

export default CreateDeckLink