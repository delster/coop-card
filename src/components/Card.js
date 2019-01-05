import React from "react";
import Button from '@material-ui/core/Button';
import "./Card.sass";

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const titles = [
  'Name',
  'Title',
  'Lorem',
  'Ipsum',
  'Place',
  'Holder'
]
const images = [
  "https://i.imgur.com/aJRGWBC.png",
  "https://i.imgur.com/SjOYG7t.jpg",
  "https://i.imgur.com/yAv08Fi.png",
  "https://i.imgur.com/HnNispE.png",
]
const descriptions = [
  "This is the best card, believe me. I know cards. This card? It's the best card!",
  "This card is okay, not great.. but you know, it does the thing.",
  "Hah, this card is garbage. Why is it even in your deck? No, seriously. Why?",
  "Lorem ipsum dolor sit amet...",
  "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
  "a b c d e f g h i j k l m n o p q r s t u v w x y z",
]

export const randomCard = () => {
  return (
    <Card
      cost={rand(0, 7)}
      title={titles[rand(0, titles.length - 1)]}
      img={images[rand(0, images.length - 1)]}
      value={rand(2, 10)}
      description={descriptions[rand(0, descriptions.length - 1)]}
    />
  )
}

const Card = props => {
  const { cost, title, img, description, value } = props

  return (
    <div className="card">
      <div className="card__top">
        <span className="card__cost">Cost: {cost}</span>
        <span className="card__title">{title}</span>
      </div>
      <div className="card__image">
        <img src={img} alt={title} />
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      <div className="card__bottom">
        <Button className="card__debug--play" variant="contained" color="primary">Play Me</Button>
        <span className="card__value">Val: {value}</span>
      </div>
    </div>
  );
};

export default Card;