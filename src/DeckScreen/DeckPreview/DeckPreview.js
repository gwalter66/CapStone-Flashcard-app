import React from "react"

import CardList from "./CardList"
import DeckOverview from "./DeckOverview"
import DeckPreviewNav from "./DeckPreviewNav"

function DeckPreview({ deck, loadDeck }) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <DeckPreviewNav deck={deck} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <DeckOverview deck={deck}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col m-1">
                        <h2>Cards</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <CardList deck={deck} loadDeck={loadDeck} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default DeckPreview