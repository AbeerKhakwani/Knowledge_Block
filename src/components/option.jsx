import React, {Component} from 'react';
import Style             from './../style.js';


export default class Image extends Component {
  constructor(props, state) {
    super(props, state);
  }
  render() {

    let style = Style.styles
    var color = 'before';
    var wrongOption = ((this.props.option == this.props.selectedOption) && (this.props.showAnswer == "wrong")) ? wrongOption ='optionSelected' : "";
   (this.props.showAnswer) ? color=   (this.props.option != this.props.answer)?"wrong" : "right" : ""

   return (
      <div className={"hover "+ wrongOption}>
          <label className="container">
            <input className={color} type="radio" onChange={this.props.handleOptionChange}  value={this.props.option} checked={(this.props.option == this.props.selectedOption)} disabled={(this.props.showAnswer)} />
              <span> {this.props.option}</span>
          </label>
      </div>
    );
  }
}
