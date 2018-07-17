import React, { Component } from "react";
import uuid from "uuid";
import { Header } from "../components/Header";
import { ListItem } from "../components/ListItem";
import { AddForm } from "../components/AddForm";

class App extends Component {
  onFormSubmit = event => {
    event.preventDefault();
    const userOption = event.target.elements.option.value;
    if (userOption) {
      this.setState(({ option }) => ({
        option: [...option, { id: this.onProvideKey(), task: userOption }]
      }));
      event.target.elements.option.value = ``;
    }
  };

  onProvideKey = () => {
    const key = String(uuid());
    return key.slice(0, key.indexOf(`-`, key.indexOf(`-`) + 1));
  };

  onOptionWasClicked = id => {
    this.setState({ editToggle: true, editValue: id });
  };

  onEditFormSubmit = (event, id) => {
    event.preventDefault();
    const userType = event.target.elements.edit.value;
    this.setState({
      option: this.state.option.map(
        task => (task.id === id ? { id, task: userType } : task)
      ),
      editToggle: false
    });
  };

  onRemoveAll = event => {
    event.preventDefault();
    this.setState({ option: [] });
  };

  onRemove = id => {
    this.setState({ option: this.state.option.filter(task => task.id !== id) });
  };

  onMakeDecision = event => {
    event.preventDefault();
    const random = Math.floor(Math.random() * this.state.option.length);
    alert(this.state.option[random].task);
  };

  constructor(props) {
    super(props);
    this.state = {
      title: `Todo App`,
      subtitle: `Put your life in the hands of a computer`,
      option: [],
      editToggle: false,
      editValue: ``
    };
  }

  render() {
    return (
      <div>
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
          optionLength={this.state.option.length}
        />
        <ListItem
          isDisabled={!(this.state.option.length > 0)}
          makeDecision={this.onMakeDecision}
          removeAll={this.onRemoveAll}
          option={this.state.option}
          optionClicked={this.onOptionWasClicked}
          remove={this.onRemove}
          editToggle={this.state.editToggle}
          editValue={this.state.editValue}
          onEditFormSubmit={this.onEditFormSubmit}
        />
        <AddForm submitForm={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
