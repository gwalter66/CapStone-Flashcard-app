import React from 'react'
import { Link } from 'react-router-dom'

import { deleteDeck } from '../utils/api'

function DeckView({ deck, loadDecks }) {
    if (deck) {

        function handleDelete() {
            const abortController = new AbortController
            const result = window.confirm("Delete this Deck")
            if (result) {
                deleteDeck(deck.id, abortController.signal)
                    .then(loadDecks)
            }
        }

        return (
            <>
                <li>
                    <h3>{deck.name}</h3>
                    <p>{deck.description}</p>
                    <p>{deck.cards.length} cards</p>
                    <Link to={`/decks/${deck.id}`}>View</Link>
                    <Link to={`/decks/${deck.id}/study`}>Study</Link>
                    <button type='delete' onClick={handleDelete}>Delete Deck</button>
                </li>
            </>
        )
    } else {
        return (
            <>
                <h1>Loading!</h1>
            </>
        )
    }
}

export default DeckView