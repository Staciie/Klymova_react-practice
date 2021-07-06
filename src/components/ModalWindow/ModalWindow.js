import React, { useState } from 'react';

import { Button } from './Button';
import { ModalForm } from './ModalForm';

export function ModalWindow(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [newUserData, setNewUserData] = useState('');
  function onClick() {
    setIsOpen(!isOpen);
  }
  function updateIsOpen(value) {
    setIsOpen(value);
  }

  function getNewUserData(value) {
    setNewUserData(value);
  }
  props.getNewUserDataFromPage(newUserData);
  return (
    <>
      <Button onClick={onClick} />
      <ModalForm isOpen={isOpen} updateIsOpen={updateIsOpen} getNewUserData={getNewUserData} />
    </>
  );
}
