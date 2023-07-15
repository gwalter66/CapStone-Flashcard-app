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

                <label htmlFor="front">
                    Front 
                    <textarea 
                        id="front"
                        name='front'
                        
                        value={newCard.front}
                        onChange={handleChange}
                    />
                </label>

                <br />

                <label htmlFor="back">
                    Back 
                    <textarea 
                        id='back'
                        name='back'
                        
                        value={newCard.back}
                        onChange={handleChange}
                    />
                </label>

                <br />

                <Link to={`/decks/${deck.id}`}>Cancel</Link>
                <button type="submit">Submit</button>

            </form>
        </>
    )
}

export default EditCardForm