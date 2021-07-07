import React, { useState } from 'react';

import { Button } from './Button';
import { ModalForm } from './ModalForm';

export function ModalWindow(props) {
  const [isOpen, setIsOpen] = useState(false);
  function onClick() {
    setIsOpen(!isOpen);
  }
  function updateIsOpen(value) {
    setIsOpen(value);
  }

  return (
    <>
      <Button onClick={onClick} />
      <ModalForm
        isOpen={isOpen}
        updateIsOpen={updateIsOpen}
        getNewUserData={props.getNewUserData}
      />
    </>
  );
}
