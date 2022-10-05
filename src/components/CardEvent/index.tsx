import { Card } from "react-bootstrap";
import { StringOptions } from "sass";
import "./cardEvent.scss";

type CardEventProps = {
  title: string;
  description: string;
  cardImage: string;
};

export default function CardEvent(props: CardEventProps) {
  return (
    <Card id="card" className="rounded text-center cards m-4">
      <Card.Body className="cardContent">
        <Card.Img
          src={`../../../public/images/${props.cardImage}.png`}
          alt={props.cardImage}
          className="cardImage mt-4 mb-3"
        />
        <h4 className="text-center">{props.title}</h4>
        <span>{props.description}</span>
      </Card.Body>
    </Card>
  );
}