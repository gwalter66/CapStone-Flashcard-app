import React from "react"

import CreateDeckLink from "./CreateDeckLink"
import DeckList from "./DeckList"
import './Home.css'

function Home() {
    return (
        <>
            <div className="container-fluid">

                <div className="row">
                    <CreateDeckLink />  
                </div>

                <div className="row">
                    <DeckList />
                </div>

            </div>
        </>
    )
}

export default Home