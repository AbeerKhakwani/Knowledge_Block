import React, {Component} from 'react';
import Option             from './option.jsx';
import Result             from './result.jsx';


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
    var selectedOption = this.state.selectedOption;
    var handleOptionChange = this.handleOptionChange;
    var showAnswer = this.state.showAnswer;
    var result = <input className={"submit-style " + ((selectedOption)? "submit-style-color" :"")}  type="button" value="Submit" onClick={this.answerCheck} disabled={!(selectedOption)}  />;
    var answer = this.props.answer

    if(showAnswer){
     result = <Result result={showAnswer} reset={this.reset}/>
    }
    return (
      <div>
        <form>
          {this.props.options.map(function(object, index){
            return <Option key={index} option={object} selectedOption={selectedOption} handleOptionChange={handleOptionChange} showAnswer={showAnswer} answer={answer}/>
          })}
          <div className="result">
            {result}
          </div>
        </form>
      </div>
    );


  }
}
