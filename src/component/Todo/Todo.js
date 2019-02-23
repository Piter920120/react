import React, { Component } from 'react';

import AddTaskForm from './AddTaskForm';
import Footer from './Footer';
import Header from './Header';
import TaskListItem from './TaskListItem';

import Main from './Main';
import Controls from './Controls';

import './base.css';
import './index.css';

import data from './tasks.json';

class Todo extends Component {
  state = {
    tasks: data.tasks,
  };

  toogleIsDone = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id !== taskId
          ? task
          : {
              ...task,
              isDone: !task.isDone,
            }
      ),
    });
  };

  addTask = taskTitle => {
    this.setState({
      tasks: this.state.tasks.concat({
        id: Date.now(),
        // For Robert
        // id: Math.max(this.state.tasks.map(({id}) => id), 0) + 1
        title: taskTitle,
        isDone: false,
      }),
    });
  };

  removeTask = taskId => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== taskId),
    });
  };

  updateTask = (taskId, taskTitle) => {
    this.setState({
      tasks: this.state.tasks.map(
        task => task.id !== taskId ? task : {
          ...task,
          title: taskTitle
        }
      )
    })
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header>
            <AddTaskForm />
          </Header>

          <Main>
            {this.state.tasks.map(task => (
              <TaskListItem
                key={task.id}
                isEditing={false}
                taskTitle={task.title}
                isDone={task.isDone}
              />
            ))}
          </Main>

          <Controls />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Todo;
