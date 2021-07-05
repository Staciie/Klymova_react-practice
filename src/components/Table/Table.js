import React from 'react';

import { Header, Row } from './components';
import data from '../../data/users.json';

export function Table(props) {
  const { value } = props;
  const filterValue = value.toLowerCase();
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
      <thead>
        <Header />
      </thead>
      <tbody>{createRow}</tbody>
    </table>
  );
}
