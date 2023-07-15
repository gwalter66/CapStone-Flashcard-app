import React, { useEffect, useState } from "react"
import { Route, Switch, useRouteMatch, Redirect, useParams } from 'react-router-dom'

import { readDeck } from "../utils/api"

import DeckPreview from "./DeckPreview/DeckPreview"
import EditDeck from "./EditDeck/EditDeck"
import StudyDeck from "./StudyDeck/StudyDeck"
import AddCard from "./AddCard/AddCard"
import EditCard from "./EditCard/EditCard"

function Deck() {
    const { path } = useRouteMatch()
    const { deckId } = useParams()

    const [deck, setDeck] = useState({ cards: []})

    const abortController = new AbortController
    function loadDeck() {
        readDeck(deckId, abortController.signal).then(setDeck)
    }

    useEffect(() => {
        loadDeck()

        return () => abortController.abort()
    }, [])

    if(deck) {
        return (
            <>
                <Switch>

                    <Route exact path={path}>
                        <DeckPreview deck={deck} loadDeck={loadDeck} />
                    </Route>

                    <Route path={`${path}/edit`}>
                        <EditDeck deck={deck} loadDeck={loadDeck} />
                    </Route>

                    <Route path={`${path}/study`}>
                        <StudyDeck deck={deck} />
                    </Route>

                    <Route path={`${path}/cards/new`}>
                        <AddCard deck={deck} />
                    </Route>

                    <Route path={`${path}/cards/:cardId/edit`}>
                        <EditCard deck={deck} loadDeck={loadDeck} />
                    </Route>

                    <Route>
                        <Redirect to="/notFound" />
                    </Route>

                </Switch>
            </>
        )
    } else {
        return <h2>Loading!</h2>
    }
}

export default Deck