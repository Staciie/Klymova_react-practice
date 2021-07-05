/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';

import { Header, Row } from './components';
import data from '../../data/users.json';
// eslint-disable-next-line react/prefer-stateless-function
export class Table extends React.Component {
  render() {
    const filterValue = this.props.value.toLowerCase();
    const filteredData = data.filter((elem) => elem.name.toLowerCase().includes(filterValue));
    const createRow = filteredData.map((user) => (
      <Row
        key={user.id}
        id={user.id}
        name={user.name}
        time={user.time}
        desc={user.description}
        done={user.done}
      />
    ));
    return (
      <table className="table">
        <tr>{this.props.nameValue}</tr>
        <thead>
          <Header />
        </thead>
        <tbody>{createRow}</tbody>
      </table>
    );
  }
}
