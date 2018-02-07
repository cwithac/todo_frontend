import React, {Component} from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleSubmit() {
    this.props.addTodo(this.state.inputValue);
  }
  render() {
    return (
      <div className = "form">
        <input className = "input"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button className = "addButton"
          onClick = {this.handleSubmit}
        >
        		&#x2795;
        </button>
      </div>
    )
  }
}

export default TodoForm;
