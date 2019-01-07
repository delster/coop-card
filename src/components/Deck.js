import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card, { randomCard } from "./Card";

export class Deck extends Component {
  constructor(props) {
    super(props)

    // Dummy deck.
    this.state = {
      drawPile: [],
      hand: [],
      discardPile: [],
    }
  }

  componentDidMount() {
    this.debugFillWithRandom(60)
  }

  debugFillWithRandom(count=30){
    let randomDeck = []
    for(let i=0; i<count; i++) { randomDeck.push( randomCard() ) }
    this.setState( {drawPile: randomDeck} )
  }

  drawCard() {
    let draw = this.state.drawPile[this.state.drawPile.length-1]
    this.setState({
      drawPile: this.state.drawPile.filter(card => card !== draw),
      hand: this.state.hand.concat(draw)
    })
  }

  playCard(i) {
    let played = this.state.hand[i]
    this.setState({
      hand: this.state.hand.filter(card => card !== played),
      discardPile: this.state.discardPile.concat(played)
    })
  }

  render() {
    return (
      <div className="player__deck">
        <div className="player__drawpile">
          <span className="player__drawpile--count">{this.state.drawPile.length}</span>
          <Button
            className="player__debug--draw"
            variant="contained"
            color="primary"
            onClick={() => this.drawCard()}>
            Draw Card
          </Button>
        </div>
        <Grid container spacing={24} className="player__hand">
          <Hand
            cards={this.state.hand}
            playCallback={() => this.playCard()} />
        </Grid>
      </div>
    )
  }
}

const Hand = props => {
  const { cards, playCallback } = props
  return (
    cards.map( (card, idx) => <HandSlot i={idx} onClick={() => playCallback(idx)} key={idx} />)
  )
}

const HandSlot = props => {
  const { i, onClick } = props
  return(
    <Grid item xs={6} sm={4} md={3} key={i}>
      <Card onClick={() => onClick(i)}>i = {i}, onClick = {onClick}</Card>
    </Grid>
  )
}

export default Deck;
