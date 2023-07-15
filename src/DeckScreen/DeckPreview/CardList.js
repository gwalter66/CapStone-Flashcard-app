import React from "react"

import CardView from "./CardView"

function CardList({ deck, loadDeck }) {
    return (
        <>
                    <ul>
                        {deck.cards.map((card, index) => (
                            <CardView 
                                card={card}
                                key={index}
                                loadDeck={loadDeck}
                            />
                        ))}
                    </ul>
        </>
    )
}

export default CardList