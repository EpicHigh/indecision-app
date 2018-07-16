import React, { Component } from "react";
import uuid from "uuid/v4";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: `Todo App`,
      subtitle: `Put your life in the hands of a computer`,
      option: []
    };
  }
  onFormSubmit = event => {
    event.preventDefault();
    const userOption = event.target.elements.option.value;
    if (userOption) {
      this.setState(({option}) => ({option: [...option, userOption]}));
      event.target.elements.option.value = ``;
    }
  };
  onRemoveAll = event => {
    event.preventDefault();
    this.setState({ option: [] });
  };
  onMakeDecision = event => {
    event.preventDefault();
    const random = Math.floor(Math.random() * this.state.option.length);
    alert(this.state.option[random]);
  };
  onProvideKey () {
  	const key = String(uuid());
  	return key.slice(0,key.indexOf(`-`,key.indexOf(`-`) + 1))
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.subtitle}</p>
        <p>
          {this.state.option.length > 0
            ? `Here are your options ${this.state.option.length}`
            : `No options`}
        </p>
        <button
          disabled={!(this.state.option.length > 0)}
          onClick={this.onMakeDecision}
        >
          What should I do first?
        </button>
        <button onClick={this.onRemoveAll}>Remove All</button>
        {this.state.option.length > 0 && (
          <ol>
            <Option option={this.state.option} getKey={this.onProvideKey}/>
          </ol>
        )}
	      <h3>Add your option:</h3>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" required />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

const Option = ({ option,getKey }) => {
  return option.map(value => <li key={getKey()}>{value}</li>);
};

export default App;
