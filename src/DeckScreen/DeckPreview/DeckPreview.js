import React from "react"

import CardList from "./CardList"
import DeckOverview from "./DeckOverview"
import DeckPreviewNav from "./DeckPreviewNav"

function DeckPreview({ deck, loadDeck }) {
    return (
        <>
            <DeckPreviewNav deck={deck} />
            <DeckOverview deck={deck}/>
            <h2>Cards</h2>
            <CardList deck={deck} loadDeck={loadDeck} />
        </>
    )
}

export default DeckPreview