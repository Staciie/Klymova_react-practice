/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React from 'react';

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="input-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className="btn btn-outline-secondary"
          value="Search"
          type="submit"
          id="button-addon2"
          onClick={() => {
            this.props.handleInput(this.state.value);
          }}
        />
      </div>
    );
  }
}
