import React, { useState } from "react"
import { Link, useParams } from 'react-router-dom'

import { createCard } from "../../utils/api"

function AddCardForm({ deck }) {
    const {deckId} = useParams()

    const initializeNewCard = {
        front: "",
        back: "",
    }
    const [newCard, setNewCard] = useState({ ...initializeNewCard})

    const handleChange = ({ target }) => {
        setNewCard({
            ...newCard,
            [target.name]: target.value
        })
        console.log("Current Value of", newCard)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const abortController = new AbortController
        createCard(deck.id, newCard, abortController.signal)
            .then(setNewCard({ ... initializeNewCard }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="front">
                Front
                <textarea 
                    id='front'
                    name="front"
                    required
                    placeholder="Front side of card"
                    onChange={handleChange}
                    value={newCard.front}
                />
            </label>

            <br />

            <label htmlFor="back">
                Back 
                <textarea 
                    id='back'
                    name='back'
                    required
                    placeholder="Back Side of Card"
                    onChange={handleChange}
                    value={newCard.back}
                />
            </label>

            <br />

            <Link to={`/decks/${deckId}`}>Done</Link>
            <button type="submit">Save</button>
        </form>
    )
}

export default AddCardForm