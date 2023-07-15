import React from "react"

import AddCardForm from "./AddCardForm"
import AddCardNav from "./AddCardNav"

function AddCard({ deck }) {
    return (
        <>
        <div className="containter-fluiid">

                <div className="row">
                    <div className="col">
                        <AddCardNav deck={deck} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h1>{deck.name}: Add Card</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <AddCardForm deck={deck} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCard