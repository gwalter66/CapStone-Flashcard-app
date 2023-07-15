import React from "react"

import CreateDeckForm from "./CreateDeckForm"
import CreateDeckNav from "./CreateDeckNav"

function CreateDeck() {
    return (
        <>
        <div className="container-fluid">

            <div className="row">
                <div className="col">
                    <CreateDeckNav />
                </div>
            </div>

            <div className='row'>
                <div className="col">
                    <h1>Create Deck</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <CreateDeckForm />
                </div>
            </div>

        </div>
        </>
    )
}

export default CreateDeck