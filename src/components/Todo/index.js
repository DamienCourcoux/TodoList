// == Import
import './todo.scss';
import PropTypes from 'prop-types';

// == Composant
const Todo = ({ numberOfTodo, tasks }) => (
  <section className="todo__Container">
    <p className="taskInProgress">{numberOfTodo} tâches en cours</p>
    <form>
      <fieldset className="todo__fieldset">
        {
          tasks.map((task) => (
            <div key={task.id} className="todo__fieldset__container">
              <label htmlFor={task.id}>
                <input type="checkbox" name="todo" id={task.id} value={task.label} />
                {task.label}
              </label>
            </div>
          ))
        }
      </fieldset>
    </form>
  </section>
);

// == PropTypes
Todo.propTypes = {
  numberOfTodo: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Todo;
