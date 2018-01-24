import React, {Component} from 'react';

export default class Question extends Component {
  render() {
    return (
    <div>
      <p className="font-style"> {this.props.question} </p>
      <div className="div-container">
        <img  className="img-style" src={this.props.image}  alt={this.props.image} />
      </div>
    </div>
    );
  }
}
