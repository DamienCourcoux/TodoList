// == Import
import './header.scss';
import PropTypes from 'prop-types';

// == Composant
const Header = ({ value, addTask }) => (
  <header>
    <input
      type="text"
      placeholder="Ajouter une tâche"
      className="header__input"
      value={value}
      onChange={addTask}
    />
  </header>
);

// Header.defaultProps = {
//   value: [],
// };

Header.propTypes = {
  value: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
};

// == Export
export default Header;
