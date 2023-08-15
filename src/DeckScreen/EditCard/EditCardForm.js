import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import { readCard, updateCard } from "../../utils/api";
import CardForm from "../../CardForm";

function EditCardForm({ deck, loadDeck }) {
  const history = useHistory();
  const { cardId } = useParams();

  const initializeUpdatedCard = {
    front: "",
    back: "",
  };

  const [newCard, setNewCard] = useState({ ...initializeUpdatedCard });

  const handleChange = ({ target }) => {
    setNewCard({
      ...newCard,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCard(newCard)
      .then(loadDeck)
      .then(history.push(`/decks/${deck.id}`));
  };

  useEffect(() => {
    readCard(cardId).then(setNewCard);
  }, []);

  return (
    <CardForm
      cardId={cardId}
      deck={deck}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      newCard={newCard}
    />
  );
}

export default EditCardForm;
