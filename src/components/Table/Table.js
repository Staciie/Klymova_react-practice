/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { Header, Row } from './components';

export function Table(props) {
  const { searchValue, data } = props;

  const filterValue = searchValue.toLowerCase();

  const createRow = data
    .filter((elem) => elem.name.toLowerCase().includes(filterValue))
    .map((user) => (
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
