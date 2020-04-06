import React from "react";
import Display from "./Display";
import List from "./List";
import Form from "./Form";

class Content extends React.Component {
  idNum = 100;
  state = {
    arrTask: [
      { title: "Task 1", actual: false, id: 0 },
      { title: "Task 2", actual: false, id: 1 },
      { title: "Task 3", actual: false, id: 2 },
    ],
  };

  removeTask = (id) => {
    this.setState(({ arrTask }) => {
      const idx = arrTask.findIndex((el) => el.id === id);
      const newArr = [...arrTask.slice(0, idx), ...arrTask.slice(idx + 1)];
      return {
        arrTask: newArr,
      };
    });
  };

  addTask = (title) => {
    const newTask = {
      title,
      actual: false,
      id: this.idNum++,
    };
    this.setState(({ arrTask }) => {
      const newArr = [...arrTask, newTask];
      return {
        arrTask: newArr,
      };
    });
  };

  markedTask = (id) => {
    this.setState(({ arrTask }) => {
      const idx = arrTask.findIndex((el) => el.id === id);

      const oldTask = arrTask[idx];

      const newTask = {
        ...oldTask,
        actual: !oldTask.actual,
      };
      console.log(newTask);
      const newArr = [
        ...arrTask.slice(0, idx),
        newTask,
        ...arrTask.slice(idx + 1),
      ];
      return {
        arrTask: newArr,
      };
    });
  };

  render() {
    const actual = this.state.arrTask.filter((el) => el.actual).length;
    return (
      <div className="container">
        <div className="app mt-4 ">
          <Display active={this.state.arrTask.length} actual={actual} />
          {this.state.arrTask.length ? (
            <List
              arr={this.state.arrTask}
              remove={this.removeTask}
              actual={this.markedTask}
            />
          ) : (
            <p className="alert text-center">no tasks</p>
          )}
          <Form add={this.addTask} />
        </div>
      </div>
    );
  }
}

export default Content;
