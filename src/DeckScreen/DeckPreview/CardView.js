import React from "react"
import { Link, useRouteMatch } from 'react-router-dom'

import { deleteCard } from "../../utils/api"

function CardView({ card, loadDeck }) {
    const { url } = useRouteMatch()

    function handleDeleteCard() {
        const abortController = new AbortController

        const result = window.confirm("Delete this card?")
        if (result) {
           deleteCard(card.id, abortController.signal)
            .then(loadDeck) 
        } 
    }

    return (
        <>
            <li>
                <p>{card.front}</p>
                <p>{card.back}</p>
                <Link to={`${url}/${card.id}/edit`}>Edit</Link>
                <button type='delete' onClick={handleDeleteCard}>Delete</button>
            </li>
        </>
    )
}

export default CardView