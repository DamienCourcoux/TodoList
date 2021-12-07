/* eslint-disable jsx-a11y/label-has-associated-control */
import './task.scss';
import PropTypes from 'prop-types';

import Task from './task';

const TaskList = ({ tasks, onCheckboxChange }) => (
  <ul className="list">
    {
      tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onCheckboxChange={onCheckboxChange}
        />
      ))
    }
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

export default TaskList;
