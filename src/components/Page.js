/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { SearchForm } from './SearchForm';
import { Table } from './Table';
import { ModalWindow } from './ModalWindow';
import users from '../data/users.json';

export function Page() {
  const [searchValue, setSearchValue] = useState('');
  const [newUserData, setNewUserData] = useState('');
  const [data, setData] = useState(users);

  function handleInput(val) {
    setSearchValue(val);
  }

  function getNewUserData(value) {
    setData(value);
  }
  console.log(data);

  return (
    <>
      <SearchForm handleInput={handleInput} />
      <Table data={data} searchValue={searchValue} />
      <ModalWindow getNewUserData={getNewUserData} />
    </>
  );
}
