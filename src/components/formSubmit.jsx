import React, {Component} from 'react';
import Option             from './option.jsx';
import Style              from './../style.js';
import FaRepeat           from 'react-icons/lib/fa/repeat';
import Correct            from 'react-icons/lib/fa/check-circle-o';
import Incorrect              from 'react-icons/lib/fa/times-circle-o';




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
    var result  = <input className="submitStyle"  type="button" value="Submit" onClick={this.answerCheck} disabled={!(selectedOption)}  />;
    var redo = <a type="button" onClick={this.reset}> <FaRepeat size='1em' /> Take again </a>
    var answer = this.props.answer

    if(showAnswer){
        if(showAnswer === 'correct'){
          result = <div>
                   <Correct size="5em"/>
                    <p>Correct</p>
                    {redo}
                   </div>
        }
        else if(showAnswer === 'wrong'){
          result = <div>
                   <Incorrect size="5em"/>
                    <p>Incorrect</p>
                    {redo}
                   </div>
        }
    }
    return (
      <div>
        <form>
          {this.props.options.map(function(object, index){
            return <Option key={index} option={object} selectedOption={selectedOption} handleOptionChange={handleOptionChange} showAnswer={showAnswer} answer={answer}/>
          })}
          <div style={style.center}>
            {result}
          </div>
        </form>
      </div>
    );


  }
}
