import React, { useState, useEffect } from 'react'

import DeckView from "./DeckView"

import { listDecks } from '../utils/api'

function DeckList(){
    const [decks, setDecks] = useState([{ cards: []}])
    const abortController = new AbortController

    function loadDecks() {
        listDecks(abortController.signal).then(setDecks)
    }

    useEffect(() => {
        loadDecks()

        return () => abortController.abort()
    }, [])

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <ul>
                        {decks.map((deck, index) => (
                            <DeckView
                                key={index}
                                deck={deck} 
                                loadDecks={loadDecks}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DeckList