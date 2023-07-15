import React, { useState } from "react"
import { Link, useHistory, useParams } from 'react-router-dom'

import { updateDeck } from "../../utils/api"

function EditDeckForm({ deck, loadDeck }) {
    const { deckId } = useParams()
    const history = useHistory()

    const [newDeck, setNewDeck] = useState({ ...deck })
    

    const handleChange = ({ target }) => {
        setNewDeck({
            ...newDeck,
            [target.name]: target.value,
            id: deckId
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateDeck(newDeck)
            .then(loadDeck)
            .then(history.push(`/decks/${deckId}`))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name 
                    <input 
                        type="text"
                        id='name'
                        name='name'
                        required
                        placeholder={deck.name}
                        value={newDeck.name}
                        onChange={handleChange}
                    />
                </label>

                <br />

                <label htmlFor='description'>
                    Description
                    <textarea 
                        id='description'
                        name='description'
                        required
                        placeholder={deck.description}
                        onChange={handleChange}
                        value={newDeck.description}
                    />
                </label>

                <br />

                <Link to={`/decks/${deck.id}`}>Cancel</Link>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default EditDeckForm