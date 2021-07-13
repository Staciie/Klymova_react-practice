import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

import { InputField } from './InputField';

const newUserObj = { name: '', description: '', done: false, time: '', id: '' };
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .max(20)
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .required(),
  description: Yup.string().max(40).required(),
});

export function ModalForm({ open, setOpen, createUserElem }) {
  if (!open) return null;

  return (
    <Formik
      initialValues={newUserObj}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        createUserElem({ ...values, time: new Date() });
        setOpen(false);
      }}
    >
      {() => (
        <Dialog open={open} aria-labelledby="dialog-form-title" TransitionComponent="Zoom">
          <DialogTitle id="dialog-form-title">
            Insert your data
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </DialogTitle>
          <DialogContent>
            <Form style={{ textAlign: 'center' }}>
              <InputField name="name" placeholder="Name" type="text" />
              <InputField name="description" placeholder="Description" type="text" />
              <InputField name="done" placeholder="Description" type="checkbox" />
              <DialogActions>
                <Button
                  type="submit"
                  color="primary"
                  size="small"
                  fullWidth="true"
                  variant="outlined"
                >
                  Add
                </Button>
              </DialogActions>
            </Form>
          </DialogContent>
          {/* </div> */}
        </Dialog>
      )}
    </Formik>
  );
}
