import React, { useState } from 'react';

import { Button } from './Button';
import { ModalForm } from './ModalForm';

export function ModalWindow(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button setIsOpen={setIsOpen} isOpen={isOpen} />
      <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} createUserElem={props.createUserElem} />
    </>
  );
}
