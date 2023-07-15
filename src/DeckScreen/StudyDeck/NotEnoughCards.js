import React from "react";
import { Link } from 'react-router-dom'

function NotEnoughCards({ deck }) {
    let numCards = deck.cards.length

    if (numCards = 1) {
        return (
            <>
                <h2>NOT ENOUGH CARDS!.</h2>
                <p>{`You need at least 3 cards to study
                    There is ${numCards} in this deck. `}
                </p>
                <Link 
                    to={`/decks/${deck.id}/cards/new`}
                    className='btn btn-primary'
                >
                    Add Cards
                </Link>
            </>
        )
    } else {
        return (
            <>
                <h2>NOT ENOUGH CARDS!</h2>
                <p>{`You need at least 3 cards to study. 
                    There are ${numCards} cards in this deck.`}
                </p>
            </>
        )
    }
   
}

export default NotEnoughCards