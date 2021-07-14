/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { SearchForm } from './SearchForm';
import { Table } from './Table';
import { ModalWindow } from './ModalWindow';
import { useTableApi } from '../hooks/useTableApi';

export function Page() {
  const [searchValue, setSearchValue] = useState('');
  const [data, api] = useTableApi('http://localhost:3004/users');
  const { createUserElem, filterUsers } = api;

  return (
    <>
      <ModalWindow createUserElem={createUserElem} />
      <SearchForm filterUsers={filterUsers} />
      <Table data={data} searchValue={searchValue} />
    </>
  );
}
