/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { setState } from 'react';

import { SearchForm } from './SearchForm';
import { Table } from './Table';

export class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleInput = (val) => {
    this.setState({ value: val });
  };

  render() {
    return (
      <>
        <SearchForm handleInput={this.handleInput} />
        <Table value={this.state.value} />
      </>
    );
  }
}
