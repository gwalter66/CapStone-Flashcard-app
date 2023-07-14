import React from "react"
import { Link, useParams } from 'react-router-dom'

function AddCardNav({ deck }) {
    const { deckId } = useParams()

    return (
        <>
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>

                    <li className='breadcrumb-item'>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className='breadcrumb-item'>
                        <Link to={`/decks/${deckId}`}>{deck.name}</Link>
                    </li>

                    <li className='breadcrumb-item current' aria-current='page'>
                        Add Card
                    </li>

                </ol>
            </nav>
        </>
    )
}

export default AddCardNav