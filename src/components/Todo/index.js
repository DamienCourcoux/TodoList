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
            <div key={task} className="todo__fieldset__container">
              <label htmlFor={task}>
                <input type="checkbox" name="todo" id={task} value={task} />
                {task}
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
  tasks: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

// == Export
export default Todo;
