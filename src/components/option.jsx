import React, {Component} from 'react';
import Style             from './../style.js';


export default class Image extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
    }
  }
  render() {

    let style = Style.styles
    var wrongOption = ''
    var wrong = ''

    if((this.props.option == this.props.selectedOption) && (this.props.showAnswer == "wrong")){
       wrongOption ='optionWrong'
       wrong = "wrong";
    }

   return (
      <div className={"hover " + wrongOption }>
          <label className="container">
            <input class={wrong} type="radio" onChange={this.props.handleOptionChange}  value={this.props.option} checked={this.props.option == this.props.selectedOption} disabled={(this.props.showAnswer)} />
              <span> {this.props.option}</span>
          </label>
      </div>
    );
  }
}
