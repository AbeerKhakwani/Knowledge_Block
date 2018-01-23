import React, {Component} from 'react';
import Style             from './../style.js';


export default class Image extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      hover:false,
    }
    this.toggleHover = this.toggleHover.bind(this);

  }

  toggleHover()
  {
    this.setState({hover: !this.state.hover})
  }
  render() {
    let style = Style.styles
    
   return (
      <div style={(this.state.hover) ? style.backgroundColor : style.hoverBackground} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          <label style={style.space}>
            <input style={{marginRight: '2em',marginTop:'4em',}} type="radio" onChange={this.props.handleOptionChange}  value={this.props.option} checked={this.props.option == this.props.selectedOption} disabled={(this.props.showAnswer)} />
              {this.props.option}
          </label>
      </div>
    );
  }
}
