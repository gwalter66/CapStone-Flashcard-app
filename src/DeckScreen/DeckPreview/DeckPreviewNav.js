import React from "react"
import { Link } from 'react-router-dom'

function DeckPreviewNav({ deck }) {

    return (
        <>
            <nav aria-label="breadCrumb">
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='breadcrumb-item active'>
                        {deck.name}
                    </li>
                </ol>
            </nav>
        </>
    )
}

export default DeckPreviewNav