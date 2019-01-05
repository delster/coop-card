import React, { Component } from "react";
import { randomCard } from "./Card";
import Grid from '@material-ui/core/Grid';

export class Deck extends Component {
  constructor(props) {
    super(props)

    // Dummy deck.
    this.cards = []
    for(let i=0;i<30;i++) {
      this.cards.push( randomCard() );
    }
  }

  render() {
    return (
      <div>
        <Grid container spacing={16}>
          {this.cards.map( card => <Grid item>{card}</Grid> )}
        </Grid>
      </div>
    )
  }
}
/*
  { Deck.map(card => <Card {...card} />) }
*/

export default Deck;