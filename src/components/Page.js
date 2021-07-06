import React, { useState } from 'react';

import { SearchForm } from './SearchForm';
import { Table } from './Table';
import { ModalWindow } from './ModalWindow';

export function Page() {
  const [searchValue, setSearchValue] = useState('');
  const [newUserData, setNewUserData] = useState('');
  function handleInput(val) {
    setSearchValue(val);
  }

  function getNewUserDataFromPage(value) {
    setNewUserData(value);
  }
  return (
    <>
      <SearchForm handleInput={handleInput} />
      <Table searchValue={searchValue} newUserData={newUserData} />
      <ModalWindow getNewUserDataFromPage={getNewUserDataFromPage} />
    </>
  );
}
