import React, { useState } from "react";
import StudyCardButtons from "./StudyCardButtons";

function StudyCardView({ deck }) {
    const [count, setCount] = useState(0)
    const [front, setFront] = useState(true)

    const totalCards = deck.cards.length
    
    return (
        <>
            <h3>Card {count+1} of {totalCards}</h3>
            <p>{front ? `${deck.cards[count].front}` : `${deck.cards[count].back}`}</p>
            <StudyCardButtons front={front} setFront={setFront} setCount={setCount} totalCards={totalCards} count={count} />
        </>
    )
}

export default StudyCardView