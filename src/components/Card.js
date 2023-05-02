import PropTypes from "prop-types";
import "../styles/Card.css";

function Card(props) {
  const { image, description, cardId } = props;

  Card.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cardId: PropTypes.string.isRequired,
  };
  const imageSrc = `../../assets/${image}.png`;
  return (
    <div className="card" id={cardId}>
      <img src={imageSrc} alt={`${description}`} className="cardImg" />
      <div className="card-desc">{description}</div>
    </div>
  );
}

export default Card;
