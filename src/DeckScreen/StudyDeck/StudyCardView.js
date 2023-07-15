import React, { useState } from "react";
import StudyCardButtons from "./StudyCardButtons";

function StudyCardView({ deck }) {
    const [count, setCount] = useState(0)
    const [front, setFront] = useState(true)

    const totalCards = deck.cards.length
    
    return (
        <>
            <div className="container-fluid card-flipper">

                <div className="row">
                    <div className="col">
                        <h3>Card {count+1} of {totalCards}</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p>{front ? `${deck.cards[count].front}` : `${deck.cards[count].back}`}</p>
                    </div>
                </div>

                <div className="col">
                    <div className="col">
                        <StudyCardButtons front={front} setFront={setFront} setCount={setCount} totalCards={totalCards} count={count} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudyCardView