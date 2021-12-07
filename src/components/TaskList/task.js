/* eslint-disable jsx-a11y/label-has-associated-control */
import './task.scss';
import PropTypes from 'prop-types';

const Task = ({ task, onCheckboxChange }) => (
  <li>
    <label className={task.done ? 'list-item list-item--done' : 'list-item'}>
      <input
        type="checkbox"
        checked={task.done}
        // TODO
        onChange={() => onCheckboxChange(task.id)}
      />
      {task.label}
    </label>
  </li>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

export default Task;
