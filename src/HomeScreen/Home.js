import React from "react"

import CreateDeckLink from "./CreateDeckLink"
import DeckList from "./DeckList"

function Home() {
    return (
        <>
            <CreateDeckLink />
            <DeckList />
        </>
    )
}

export default Home