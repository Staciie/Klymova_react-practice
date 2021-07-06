/* eslint-disable no-unused-vars */
import React from 'react';

import { Header, Row } from './components';
import data from '../../data/users.json';

export function Table(props) {
  const { searchValue, newUserData } = props;
  const { id, name, time, description, done } = newUserData;
  const filterValue = searchValue.toLowerCase();
  const filteredData = data.filter((elem) => elem.name.toLowerCase().includes(filterValue));
  let dataForRender;
  if (!newUserData) {
    dataForRender = filteredData;
  } else {
    dataForRender = [...filteredData, newUserData];
  }
  const createRow = dataForRender.map((user) => (
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
