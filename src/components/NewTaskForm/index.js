import './newtaskform.scss';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onFormSubmit, inputValue, onInputChange }) => (
  <form
    className="form"
    onSubmit={onFormSubmit}
  >
    <input
      type="text"
      className="form-item"
      placeholder="Ajouter une tâche"
      value={inputValue}
      onChange={onInputChange}
    />
  </form>
);

NewTaskForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default NewTaskForm;
