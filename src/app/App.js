import React, { Component } from "react";
import uuid from "uuid";
import Header from "../components/Header";
import { ListItem } from "../components/ListItem";
import { AddForm } from "../components/AddForm";
import Modal from "../components/ListModal";
import { injectGlobal } from "styled-components";
import { global, Container } from "../styles/main";

injectGlobal`${global}`;

class App extends Component {
  onFormSubmit = event => {
    event.preventDefault();
    const task = event.target.elements.option.value;
    task &&
      this.setState(({ option }) => ({
        option: [...option, { id: this.onProvideKey(), task }]
      }));
    event.target.elements.option.value = ``;
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
    const task = event.target.elements.edit.value;
    this.setState({
      option: this.state.option.map(
        option => (option.id === id ? { id, task } : option)
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

  closeModal = () => {
    this.setState({ modalToggle: false });
  };

  onMakeDecision = event => {
    event.preventDefault();
    const random = Math.floor(Math.random() * this.state.option.length);
    const decision = this.state.option[random].task;
    this.setState({ modalToggle: true, decision });
  };

  state = {
    option: [],
    editToggle: false,
    editValue: ``,
    modalToggle: false,
    decision: ``
  };

  componentDidMount() {
    try {
      const data = localStorage.getItem(`option`);
      const option = JSON.parse(data);
      option && this.setState({ option });
    } catch (e) {
      console.error(`แอบเออเร่อนะจ๊ะ แต่เธอไม่รู้บ้างเลย`);
    }
  }

  componentDidUpdate() {
    const data = JSON.stringify(this.state.option);
    localStorage.setItem(`option`, data);
  }

  render() {
    return (
      <div>
        <Header optionLength={this.state.option.length} />
        <Container>
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
        </Container>
        <Modal
          doOpenModal={this.state.modalToggle}
          decision={this.state.decision}
          doCloseModal={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
