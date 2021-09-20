// == Import
import './app.scss';
import Header from 'src/components/Header';
import Todo from 'src/components/Todo';
import tasksData from 'src/data/tasks';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Todo
      numberOfTodo={2}
      tasks={tasksData}
    />
  </div>
);

// == Export
export default App;
