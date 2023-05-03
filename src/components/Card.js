import PropTypes from "prop-types";
import "../styles/Card.css";

function Card(props) {
  const { image, description, cardId, handleCardClick } = props;

  Card.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cardId: PropTypes.string.isRequired,
    handleCardClick: PropTypes.func.isRequired,
  };
  const imageSrc = `../../assets/${image}.png`;
  return (
    <button
      type="button"
      className="card"
      id={cardId}
      onClick={handleCardClick}
    >
      <img src={imageSrc} alt={`${description}`} className="cardImg" />
      <div className="card-desc">{description}</div>
    </button>
  );
}

export default Card;
