import React from 'react';

import { Header, Row } from './components';
import data from '../../data/users.json';
// eslint-disable-next-line react/prefer-stateless-function
export class Table extends React.Component {
  render() {
    const createRow = data.map((user) => (
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
        <thead>
          <Header />
        </thead>
        <tbody>{createRow}</tbody>
      </table>
    );
  }
}
