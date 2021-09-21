import './counter.scss';
import PropTypes from 'prop-types';

// TODO mieux formater le mot "tâches" selon le nombre
const Counter = ({ ongoingTasks }) => (
  <p className="counter">{ongoingTasks} tâche(s) en cours</p>
);

Counter.propTypes = {
  ongoingTasks: PropTypes.number.isRequired,
};

export default Counter;
