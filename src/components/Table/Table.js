/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { Header, Row } from './components';
import users from '../../data/users.json';

export function Table(props) {
  const [data, setData] = useState(props.data);

  console.log(data);

  const { searchValue, newUserData } = props;
  // const { id, name, time, description, done } = newUserData;

  const filterValue = searchValue.toLowerCase();
  // const filteredData = data.filter((elem) => elem.name.toLowerCase().includes(filterValue));
  // if (!newUserData) {
  //   setData(data.filter((elem) => elem.name.toLowerCase().includes(filterValue)));
  // } else {
  //   setData([data.filter((elem) => elem.name.toLowerCase().includes(filterValue)), newUserData]);
  // }
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
