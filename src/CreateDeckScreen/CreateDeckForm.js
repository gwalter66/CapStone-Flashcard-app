import React, { useState } from "react"
import { Link, useHistory } from 'react-router-dom'

import { createDeck } from "../utils/api"

function CreateDeckForm() {
    const history = useHistory()
    
    const initilizeNewDeck = {
        name: "",
        description: '',
    }

    const [newDeck, setNewDeck] = useState({ ...initilizeNewDeck })

    const handleChange = ({ target }) => {
        setNewDeck({
            ...newDeck,
            [target.name]: target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const abortController = new AbortController
        createDeck(newDeck, abortController.signal)
            .then(response => {
                history.push(`/decks/${response.id}`)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">
                        Name
                        <input 
                            type='text'
                            id='name'
                            name='name'
                            required
                            placeholder="Deck Name"
                            value={newDeck.name}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </label>
                </div>

                <div className="form-group">
                <label htmlFor='description'>
                    Description
                    <textarea 
                        id='description'
                        name='description'
                        required
                        placeholder="Brief Description of the deck"
                        value={newDeck.description}
                        onChange={handleChange}
                        className="form-control"
                    />
                </label>
                </div>
                
                
                <Link 
                    to='/'
                    className="btn btn-secondary mx-1"
                >
                    Cancel
                </Link>
                <button 
                    type='submit'
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default CreateDeckForm