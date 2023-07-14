import React from "react"
import { Link } from "react-router-dom"

function CreateDeckNav() {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">

                    <li className="breadcrumb-item" aria-current='page'>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className='breadcrumb-item active'>
                        Create Deck
                    </li>
                    
                </ol>
            </nav>
        </>
    )
}

export default CreateDeckNav