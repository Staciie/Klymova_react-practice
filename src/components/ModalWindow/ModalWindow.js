import React, { useState } from 'react';

import { Button } from './Button';
import { ModalForm } from './ModalForm';

export function ModalWindow(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button setOpen={setOpen} open={open} />
      <ModalForm open={open} setOpen={setOpen} createUserElem={props.createUserElem} />
    </>
  );
}
