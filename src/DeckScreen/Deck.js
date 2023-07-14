import React from "react"
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom'

import DeckPreview from "./DeckPreview/DeckPreview"
import EditDeck from "./EditDeck/EditDeck"
import StudyDeck from "../StudyDeck/StudyDeck"
import AddCard from "./AddCard/AddCard"
import EditCard from "./EditCard/EditCard"

function Deck() {
    const { path } = useRouteMatch()
    return (
        <>
            <h1>Deck Component</h1>
            <Switch>

                <Route exact path={path}>
                    <DeckPreview />
                </Route>

                <Route path={`${path}/edit`}>
                    <EditDeck />
                </Route>

                <Route path={`${path}/study`}>
                    <StudyDeck />
                </Route>

                <Route path={`${path}/cards/new`}>
                    <AddCard />
                </Route>

                <Route path={`${path}/:cardId/edit`}>
                    <EditCard />
                </Route>

                <Route>
                    <Redirect to="/notFound" />
                </Route>

            </Switch>
        </>
    )
}

export default Deck