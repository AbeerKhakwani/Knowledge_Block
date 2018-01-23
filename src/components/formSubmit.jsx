import React, {Component} from 'react';
import Option             from './option.jsx';
import Style             from './../style.js';



export default class Image extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      hover:false,
      selectedOption:'',
      showAnswer:'',
    }
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.answerCheck = this.answerCheck.bind(this)
    this.reset = this.reset.bind(this)

  }
// This function resets the state so that they can retake that particular block
  reset(){
    this.setState({showAnswer: '',
                   selectedOption :''
    })
  }
  // This function selects the option they have selected
  handleOptionChange(e){
    this.setState({selectedOption: e.target.value})
  }
// Checks to see if they answered right or wrong
  answerCheck(e){
    e.preventDefault();
    var answer =  (this.state.selectedOption == this.props.answer)? 'correct' : 'wrong';
    this.setState({showAnswer: answer})
  }

  render() {

    let style = Style.styles

    var selectedOption = this.state.selectedOption;
    var handleOptionChange = this.handleOptionChange;
    var showAnswer = this.state.showAnswer;
    var result = '';
    var button  = <input style={style.submitStyle}  type="button" value="Submit" onClick={this.answerCheck} disabled={!(selectedOption)}  />;
    var redo = '';


    if(showAnswer === 'correct'){
      button =  <div>Right answer</div>;
      redo   =  <input type="button" onClick={this.reset} value="re-take"/>;
      }
      else if(showAnswer === 'wrong'){
        button= <div>Wrong Answer</div>
        redo   =  <input type="button" onClick={this.reset} value="re-take"/>;
      }

      return (
        <div>
          <form>
            {this.props.options.map(function(object, index){
              return <Option key={index} option={object} selectedOption={selectedOption} handleOptionChange={handleOptionChange}showAnswer={showAnswer}/>
            })}
            <div style={style.center}>
              {button}
              {redo}
            </div>
          </form>

          <div>{result}</div>
        </div>
      );


    }
  }
