/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

const { v4: uuidv4 } = require('uuid');

export function ModalForm(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);
  const [time, setTime] = useState(new Date());
  const [id, setId] = useState(uuidv4().toString().slice(0, 2));
  const newUserData = { id, name, time, description, done };
  function closeModal() {
    setIsOpen(false);
    props.updateIsOpen(false);
  }

  function prepareInputValue() {
    setId(uuidv4().toString().slice(0, 2));
    setTime(new Date());
    props.getNewUserData(newUserData);
    setName('');
    setDescription('');
    setDone(false);
    closeModal();
  }

  function checkInputs(event) {
    event.preventDefault();
    if (!name || !description) {
      alert('Empty fields are not allowed');
    } else {
      prepareInputValue();
    }
  }

  if (isOpen) {
    return (
      <div className="modal">
        <div className="modal_content">
          <div className="modal_content-header mb-3">
            <p>Insert your data</p>
            <button type="button" className="close" aria-label="Close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={checkInputs}>
            <div className="form-group">
              <input
                key="random1"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Description"
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={done}
                onChange={() => setDone((prev) => !done)}
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Done
              </label>
            </div>
            <input
              value="Add"
              type="submit"
              className="btn btn-secondary float-right mt-3"
              onClick={checkInputs}
            />
          </form>
        </div>
      </div>
    );
  }
  return null;
}
