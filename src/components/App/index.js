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
      tasks: tasksData,
      valueOfNewTask: [],
    };

    this.newTask = this.newTask.bind(this);
  }

  newTask(event) {
    console.log(event.target.value);
    this.setState({
      valueOfNewTask: [event.target.value],
    });
  }

  render() {
    const { valueOfNewTask, tasks } = this.state;
    return (
      <div className="app">
        <Header
          value={valueOfNewTask}
          addTask={this.newTask}
        />
        <Todo
          numberOfTodo={tasks.length}
          tasks={tasks}
        />
      </div>
    );
  }
}

// == Export
export default App;
