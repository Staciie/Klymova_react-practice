import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export class Header extends React.Component {
  render() {
    return (
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Time</th>
        <th>Description</th>
        <th>Done</th>
      </tr>
    );
  }
}
