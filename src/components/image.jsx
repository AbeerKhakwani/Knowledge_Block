import React, {Component} from 'react';


export default class Image extends Component {
  constructor(props, state) {
  super(props, state);
  }

  render() {
    return (
    <div className="divContainer">
        <img  className="imgStyle" src={this.props.image}  alt={this.props.image} />
    </div>
    );
  }
}
