import React, {Component} from 'react';

export default class Question extends Component {
  render() {
    var fontStyle= {
      fontSize: "1.5em",
    }

    return (
      <p style={fontStyle} > {this.props.question} </p>
    );
  }
}
