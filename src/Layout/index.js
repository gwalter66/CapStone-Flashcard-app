import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../HomeScreen/Home";
import Deck from "../DeckScreen/Deck";
import CreateDeck from "../CreateDeckScreen/CreateDeck";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/decks'>
            <Redirect to='/' />
          </Route>

          <Route path='/decks/new'>
            <CreateDeck />
          </Route>

          <Route path='/decks/:deckId'>
            <Deck />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </>
  );
}

export default Layout;
