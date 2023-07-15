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

            <div className="form-group">
                <label htmlFor="front">
                    Front
                    <textarea 
                        id='front'
                        name="front"
                        required
                        placeholder="Front side of card"
                        onChange={handleChange}
                        value={newCard.front}
                        className="form-control"
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="back">
                    Back 
                    <textarea 
                        id='back'
                        name='back'
                        required
                        placeholder="Back Side of Card"
                        onChange={handleChange}
                        value={newCard.back}
                        className="form-control"
                    />
                </label>
            </div>

            <Link 
                to={`/decks/${deckId}`}
                className='btn btn-secondary mx-1'
            >
                Done
            </Link>

            <button 
                type="submit"
                className="btn btn-primary"
            >
                Save
            </button>
        </form>
    )
}

export default AddCardForm