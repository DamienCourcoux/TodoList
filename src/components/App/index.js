/* eslint-disable class-methods-use-this */
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
      valueOfNewTask: '',
      test: [],
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(event) {
    const newTask = event.target.value;
    // console.log(newTask);

    const { tasks } = this.state;
    const idMaxToTheData = tasks.map((task) => task.id);
    // console.log(idMaxToTheData);
    const max = idMaxToTheData.reduce((a, b) => Math.max(a, b));
    // console.log(max);
    const newTaskId = Math.max(max) + 1;
    // console.log(newTaskId);

    const newTaskInTodo = [...tasks, { id: newTaskId, label: newTask, done: false }];
    console.log(newTaskInTodo);
    this.setState({
      valueOfNewTask: newTask,
      test: newTaskInTodo,
    });
  }

  // newTask(event) {
  //   console.log(event.target.value);
  //   this.setState({
  //     valueOfNewTask: [event.target.value],
  //   });
  // }

  render() {
    const { valueOfNewTask, tasks, test } = this.state;
    return (
      <div className="app">
        <Header
          value={valueOfNewTask}
          addTask={this.handleAddTask}
        />
        <Todo
          numberOfTodo={tasks.length}
          tasks={test}
        />
      </div>
    );
  }
}

// == Export
export default App;
