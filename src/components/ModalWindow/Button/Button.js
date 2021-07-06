import React from 'react';

export function Button(props) {
  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg my-3 float-right button-width"
      onClick={() => props.onClick()}
    >
      Add
    </button>
  );
}
