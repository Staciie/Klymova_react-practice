import React, { useState } from 'react';

import { Button } from './Button';
import { ModalForm } from './ModalForm';

export function ModalWindow(props) {
  const [isOpen, setIsOpen] = useState(false);

  function updateIsOpen(value) {
    setIsOpen(value);
  }

  return (
    <>
      <Button setIsOpen={setIsOpen} />
      <ModalForm
        isOpen={isOpen}
        updateIsOpen={updateIsOpen}
        createUserElem={props.createUserElem}
      />
    </>
  );
}
