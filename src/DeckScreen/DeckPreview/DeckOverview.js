import React from "react"
import { Link, useRouteMatch, useHistory } from 'react-router-dom'

import { deleteDeck } from "../../utils/api"

function DeckOverview({ deck }) {
    const { url } = useRouteMatch()
    const history = useHistory()

    function handleDeleteDeck() {
        const abortController = new AbortController

        const result = window.confirm("Delete this deck?")
        if (result) {
            deleteDeck(deck.id, abortController.signal)
                .then(history.push('/'))
        }
    }

    return (
        <>
            <h2>{deck.name}</h2>
            <p>{deck.description}</p>
            <Link to={`${url}/edit`}>Edit</Link>
            <Link to={`${url}/study`}>Study</Link>
            <Link to={`${url}/cards/new`}>Add Cards</Link>
            <button type='delete' onClick={handleDeleteDeck}>Delete</button>
        </>
    )
}

export default DeckOverview