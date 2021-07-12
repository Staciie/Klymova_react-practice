import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-ui/core';

import { InputField } from './InputField';

const newUserObj = { name: '', description: '', done: false, time: '', id: '' };
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .max(20)
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .required(),
  description: Yup.string().max(40).required(),
});

export function ModalForm({ isOpen, setIsOpen, createUserElem }) {
  if (!isOpen) return null;

  return (
    <Formik
      initialValues={newUserObj}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        createUserElem({ ...values, time: new Date() });
        setIsOpen(false);
      }}
    >
      {() => (
        <div className="modal">
          <div className="modal_content" justify="center">
            <div className="modal_content-header">
              <p>Insert your data</p>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <Form style={{ textAlign: 'center' }}>
              <InputField name="name" placeholder="Name" type="text" />
              <InputField name="description" placeholder="Description" type="text" />
              <InputField name="done" placeholder="Description" type="checkbox" />
              <Button
                type="submit"
                color="primary"
                size="small"
                fullWidth="true"
                variant="outlined"
              >
                Add
              </Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}
