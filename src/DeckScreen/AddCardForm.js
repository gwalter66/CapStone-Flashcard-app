import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardForm from "../CardForm";

import { createCard } from "../utils/api";

function AddCardForm({ deck, loadDeck }) {
  const { deckId } = useParams();

  const initializeNewCard = {
    front: "",
    back: "",
  };
  const [newCard, setNewCard] = useState({ ...initializeNewCard });

  const handleChange = ({ target }) => {
    setNewCard({
      ...newCard,
      [target.name]: target.value,
    });
    console.log("Current Value of", newCard);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const abortController = new AbortController();
    createCard(deck.id, newCard, abortController.signal)
      .then(setNewCard({ ...initializeNewCard }))
      .then(loadDeck);
  };

  return (
    <>
      <CardForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newCard={newCard}
        deckId={deckId}
        setNewCard={setNewCard}
      />
    </>
  );
}

export default AddCardForm;
