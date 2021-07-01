import React from 'react';

import { Header } from './header';
import { Row } from './row';
import data from '../data/users.json';

export function Table() {
  const createRow = data.map((item) => (
    <Row id={item.id} name={item.name} time={item.time} desc={item.description} done={item.done} />
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
