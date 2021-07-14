import React from 'react';

export function Button(props) {
  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg mt-3 button-width"
      onClick={() => {
        props.setOpen(!props.open);
      }}
    >
      Add
    </button>
  );
}
