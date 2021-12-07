import React from 'react';

import NewTaskForm from 'src/components/NewTaskForm';
import Counter from 'src/components/Counter';
import TaskList from 'src/components/TaskList';

import './app.scss';

import taskList from 'src/data/tasks';

class App extends React.Component {
  constructor(props) {
    super(props);

    // je définis les valeurs initiales du state
    this.state = {
      tasks: taskList,
      inputValue: '',
    };

    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  // cette fonction est appellée a l'envoi du formulaire
  handleTaskSubmit(event) {
    event.preventDefault();

    const { inputValue, tasks } = this.state;

    const ids = tasks.map((task) => task.id);
    const maxId = Math.max(...ids);
    const newId = maxId + 1;

    const newTask = {
      id: newId,
      label: inputValue,
      done: false,
    };

    const newTaskList = [...tasks, newTask];

    this.setState({
      tasks: newTaskList,
      inputValue: '',
    });
  }

  // cette fonction est appellée par le onChange du champ controlé
  handleInputChange(event) {
    // on utilise setState pour modifier l'état
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleCheckBoxChange(taskId) {
    const { tasks } = this.state;
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    this.setState({
      tasks: newTask,
    });
  }

  getOngoingTasksNumber() {
    const { tasks } = this.state;
    return tasks.filter((task) => !task.done).length;
  }

  getOrderedTasks() {
    const { tasks } = this.state;

    const completedTasks = tasks.filter((task) => task.done);
    const ongoingTasks = tasks.filter((task) => !task.done);
    return [
      ...completedTasks,
      ...ongoingTasks,
    ];
  }

  render() {
    // on peut déstructurer les propriétés de notre état
    // ce qui nous évitera plus bas de devoir répéter this.state.truc... this.state.machin
    const { inputValue } = this.state;

    return (
      <div className="app">
        <NewTaskForm
          inputValue={inputValue}
          onFormSubmit={this.handleTaskSubmit}
          onInputChange={this.handleInputChange}
        />
        <Counter ongoingTasks={this.getOngoingTasksNumber()} />
        <TaskList
          tasks={this.getOrderedTasks()}
          onCheckboxChange={this.handleCheckBoxChange}
        />
      </div>
    );
  }
}

// == Export
export default App;
