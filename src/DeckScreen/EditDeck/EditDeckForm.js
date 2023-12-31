import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from 'react-router-dom'

import { readDeck, updateDeck } from "../../utils/api"

function EditDeckForm({ deck, loadDeck }) {
    const { deckId } = useParams()
    const history = useHistory()

    const initializeUpdateDeck = {
        name: "",
        description: "",
    }

    const [newDeck, setNewDeck] = useState({ ...initializeUpdateDeck })
    
    

    const handleChange = ({ target }) => {
        setNewDeck({
            ...newDeck,
            [target.name]: target.value,
            id: deckId
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateDeck(newDeck)
            .then(loadDeck)
            .then(history.push(`/decks/${deckId}`))
    }

    useEffect(() => {
        readDeck(deckId)
            .then(setNewDeck)
    }, [])

    return(
        <>
            
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">
                        Name 
                        <input 
                            type="text"
                            id='name'
                            name='name'
                            required
                            value={newDeck.name}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </label>
                </div>

                <label htmlFor='description'>
                    Description
                    <textarea 
                        id='description'
                        name='description'
                        required
                        onChange={handleChange}
                        value={newDeck.description}
                        className="form-control"
                    />
                </label>

                    <Link 
                        to={`/decks/${deck.id}`}
                        className='btn btn-secondary mx-1'
                    >
                        Cancel
                    </Link>
                    <button 
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
            
            </form>
        </>
    )
}

export default EditDeckForm