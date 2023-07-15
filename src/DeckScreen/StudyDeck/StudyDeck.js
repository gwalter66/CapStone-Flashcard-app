import React from "react"

import StudyCard from "./StudyCard"
import StudyDeckNav from "./StudyDeckNav"

function StudyDeck({ deck }){
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <StudyDeckNav deck={deck} />
                    </div>
                </div>

            <div className="row">
                <div className="col">
                    <h1>{deck.name}: Study</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <StudyCard deck={deck} />
                </div>
            </div>

            </div>
        </>
    )
}

export default StudyDeck