import "../styles/Scoreboard.css";
import PropTypes from "prop-types";

function Scoreboard(props) {
  const { score } = props;
  Scoreboard.propTypes = {
    score: PropTypes.instanceOf(Array).isRequired,
  };
  return (
    <div className="scoreboard">
      <h2>CURRENT SCORE: {score[0]}</h2>
      <h2>HIGH SCORE: {score[1]}</h2>
    </div>
  );
}

export default Scoreboard;
