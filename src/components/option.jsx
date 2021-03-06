import React, {Component} from 'react';


export default class Image extends Component {
  constructor(props, state) {
    super(props, state);
  }
  render() {
    var color = 'before';
    var wrongOption = ((this.props.option === this.props.selectedOption) && (this.props.showAnswer)) ?  'optionSelected' : "";
    (this.props.showAnswer) ? color =   (this.props.option != this.props.answer)?"wrong" : "right" : ""

    return (
      <div className={"border-animation "+ wrongOption + (!(this.props.showAnswer)? " hover": "")}>
        <label className="container">
          <input className={color} type="radio" onChange={this.props.handleOptionChange}  value={this.props.option} checked={(this.props.option === this.props.selectedOption)} disabled={(this.props.showAnswer)} />
          <span> {this.props.option}</span>
        </label>
      </div>
    );
  }
}
