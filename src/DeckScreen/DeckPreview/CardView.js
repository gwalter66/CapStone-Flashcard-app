import React from "react"
import { Link, useRouteMatch } from 'react-router-dom'

import { deleteCard } from "../../utils/api"

function CardView({ card, loadDeck }) {
    const { url } = useRouteMatch()

    function handleDeleteCard() {
        const abortController = new AbortController

        const result = window.confirm("Delete this card?")
        if (result) {
           deleteCard(card.id, abortController.signal)
            .then(loadDeck) 
        } 
    }

    return (
        <>
            <div className="container-fluid card-list">
                <li>

                    <div className="row">
                        <p>{card.front}</p>
                    </div>

                    <div className="row">
                        <p>{card.back}</p>
                    </div>

                    <div className="row justify-content-between">
                        <Link 
                            to={`${url}/cards/${card.id}/edit`}
                            className='btn btn-secondary'
                            >
                                Edit
                            </Link>
                        <button 
                            type='delete' 
                            onClick={handleDeleteCard}
                            className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </div>

                </li>
            </div>
        </>
    )
}

export default CardView