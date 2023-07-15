import React from "react"

import NotEnoughCards from "./NotEnoughCards"
import StudyCardView from "./StudyCardView"

function StudyCard({ deck }) {
    if (deck.cards.length <= 2) {
        return (
            <>
               <NotEnoughCards deck={deck} /> 
            </>
        )
    } else {
        return (
            <>
                <StudyCardView deck={deck} />
            </>
        )
    }
}

export default StudyCard