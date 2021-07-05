/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export class Row extends React.Component {
  state = { isChecked: this.props.done };

  updateText = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    const { id, name, time, desc } = this.props;
    const status = this.state.isChecked ? 'active' : 'inactive';
    const correctTime = new Date(time).toLocaleTimeString();

    return (
      <tr className={status}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{correctTime}</td>
        <td>{desc}</td>
        <td className="align-center">
          <input type="checkbox" checked={this.state.isChecked} onChange={this.updateText} />
        </td>
      </tr>
    );
  }
}
