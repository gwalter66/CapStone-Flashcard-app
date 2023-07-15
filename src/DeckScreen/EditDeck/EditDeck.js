import React from 'react'

import EditDeckForm from './EditDeckForm'
import EditDeckNav from './EditDeckNav'

function EditDeck({ deck, loadDeck }) {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <EditDeckNav deck={deck} />
                    </div>
                </div>

                    <div className='row'>
                        <div className='col'>
                            <h1>Edit Deck</h1>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <EditDeckForm deck={deck} loadDeck={loadDeck}/>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default EditDeck