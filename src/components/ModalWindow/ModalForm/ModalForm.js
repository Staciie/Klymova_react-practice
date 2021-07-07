/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { useEffect, useState } from 'react';

const { v4: uuidv4 } = require('uuid');

const newUserObj = { name: '', description: '', done: false, time: '', id: '' };

export function ModalForm(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [newUserData, setNewUserData] = useState(newUserObj);

  useEffect(() => {
    setIsOpen(props.isOpen);
    setNewUserData({ ...newUserData, id: uuidv4().toString().slice(0, 2), time: new Date() });
  }, [props.isOpen]);

  function closeModal() {
    setIsOpen(false);
    props.updateIsOpen(false);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!newUserData.name || !newUserData.description) {
      alert('Empty fields are not allowed');
    } else {
      props.getNewUserData(newUserData);
      closeModal();
      setNewUserData({ ...newUserData, name: '', description: '', done: false });
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
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                key="random1"
                name="name"
                value={newUserData.name}
                onChange={(event) => setNewUserData({ ...newUserData, name: event.target.value })}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
                autoFocus
              />
            </div>
            <div className="form-group">
              <input
                name="description"
                value={newUserData.description}
                onChange={(event) =>
                  setNewUserData({ ...newUserData, description: event.target.value })
                }
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
                value={newUserData.done}
                onChange={() => setNewUserData({ ...newUserData, done: !newUserData.done })}
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
              onClick={onSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
  return null;
}