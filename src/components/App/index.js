// == Import
import './app.scss';
import Header from 'src/components/Header';
import Todo from 'src/components/Todo';

// == Composant
const App = () => (
  <div className="app">
    <h1>Todo (app)</h1>
    <Header />
    <Todo />
  </div>
);

// == Export
export default App;
