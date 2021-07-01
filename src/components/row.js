import React from 'react';

export function Row({ id, name, time, desc, done }) {
  const status = done === true ? 'true' : 'false';
  const correctTime = new Date(time).toLocaleTimeString();
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{correctTime}</td>
      <td>{desc}</td>
      <td className={status} />
    </tr>
  );
}
