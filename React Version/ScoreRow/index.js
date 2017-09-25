import React, { Component } from 'react';
class ScoreRow extends Component {
  render() {
    const { name, school, score } = this.props

    return (
        <tr>
            <td>{ name }</td>
            <td>{ school }</td>
            <td></td>
            <td>{ score }</td>
        </tr>
    );
  }
}

export default ScoreRow;