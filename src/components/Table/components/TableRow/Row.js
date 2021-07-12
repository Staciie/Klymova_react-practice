import React, { useState } from 'react';

export function Row(props) {
  const { id, name, time, desc, done } = props;
  const [isChecked, setIsChecked] = useState(done);
  function updateText() {
    setIsChecked(!isChecked);
  }

  const status = isChecked ? 'active' : 'inactive';
  const correctTime = new Date(time).toLocaleTimeString();

  return (
    <tr className={status}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{correctTime}</td>
      <td>{desc}</td>
      <td className="align-center">
        <input type="checkbox" checked={isChecked} onChange={updateText} />
      </td>
    </tr>
  );
}
