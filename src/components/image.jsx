import React, {Component} from 'react';
import Style             from './../style.js';


export default class Image extends Component {
  constructor(props, state) {
  super(props, state);
  }

  render() {
    let style = Style.styles

    return (
    <div style={style.divContainer} >
        <img  style={style.imgStyle} src={this.props.image}  alt={this.props.image} />
    </div>
    );
  }
}
