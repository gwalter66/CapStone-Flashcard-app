import React from "react"

import EditCardForm from "./EditCardForm"
import EditCardNav from "./EditCardNav"

function EditCard({ deck, loadDeck }) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <EditCardNav deck={deck} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h1>Edit Card</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <EditCardForm deck={deck} loadDeck={loadDeck} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCard