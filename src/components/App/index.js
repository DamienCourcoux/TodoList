// == Import
import './app.scss';
import Header from 'src/components/Header';
import Todo from 'src/components/Todo';
import tasksData from 'src/data/tasks';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfTodo: 2,
      tasks: tasksData,
    };
  }

  render() {
    const { numberOfTodo, tasks } = this.state;
    return (
      <div className="app">
        <Header />
        <Todo
          numberOfTodo={numberOfTodo}
          tasks={tasks}
        />
      </div>
    );
  }
}

// == Export
export default App;
