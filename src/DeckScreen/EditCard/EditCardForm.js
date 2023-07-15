import React, { useState, useEffect } from "react"
import { Link, useParams, useHistory } from 'react-router-dom'

import { readCard, updateCard } from "../../utils/api"

function EditCardForm({ deck, loadDeck }) {
    const history = useHistory()
    const { cardId } = useParams()

    const initializeUpdatedCard = {
        front: "",
        back: "",
    }

    const [newCard, setNewCard] = useState({ ...initializeUpdatedCard })

    const handleChange = ({ target }) => {
        setNewCard({
            ...newCard,
            [target.name]: target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateCard(newCard)
            .then(loadDeck)
            .then(history.push(`/decks/${deck.id}`))
    }

    
    useEffect(() => {
        readCard(cardId).then(setNewCard)
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="front">
                        Front 
                        <textarea 
                            id="front"
                            name='front'
                            value={newCard.front}
                            onChange={handleChange}
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
                            value={newCard.back}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </label>
                </div>

                <Link 
                    to={`/decks/${deck.id}`}
                    className="btn btn-secondary mx-1"
                >
                    Cancel
                </Link>

                <button 
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>

            </form>
        </>
    )
}

export default EditCardForm