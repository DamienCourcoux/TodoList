// == Import
import './todo.scss';

// == Composant
const Todo = () => (
  <section className="todo__Container">
    <p className="taskInProgress">2 tâches en cours</p>
    <form>
      <fieldset className="todo__fieldset">
        <div className="todo__fieldset__container">
          <label htmlFor="ketchup">
            <input type="checkbox" name="todo" id="ketchup" value="ketchup" />
            Ketchup
          </label>
        </div>
        <div className="todo__fieldset__container">
          <label htmlFor="pates">
            <input type="checkbox" name="todo" id="pates" value="pates" />
            Pâtes
          </label>
        </div>
        <div className="todo__fieldset__container">
          <label htmlFor="salade">
            <input type="checkbox" name="todo" id="salade" value="salade" />
            Salade
          </label>
        </div>
      </fieldset>
    </form>
  </section>
);

// == Export
export default Todo;
