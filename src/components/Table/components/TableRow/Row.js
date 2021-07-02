import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export class Row extends React.Component {
  render() {
    const { id, name, time, desc, done } = this.props;
    const status = done ? 'active' : 'inactive';
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
}
