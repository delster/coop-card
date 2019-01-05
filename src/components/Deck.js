import React, { Component } from "react";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { randomCard } from "./Card";

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
      <Grid container spacing={24}>
        {this.cards.map( card => <Grid item xs={2}>{card}</Grid> )}
      </Grid>
    )
  }
}

Deck.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Deck;
