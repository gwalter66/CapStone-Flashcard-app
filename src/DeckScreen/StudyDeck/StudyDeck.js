import React from "react"

import StudyCard from "./StudyCard"
import StudyDeckNav from "./StudyDeckNav"

function StudyDeck({ deck }){
    return (
        <>
            <StudyDeckNav deck={deck} />
            <h1>{deck.name}: Study</h1>
            <StudyCard deck={deck} />
        </>
    )
}

export default StudyDeck