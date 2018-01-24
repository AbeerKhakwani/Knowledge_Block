import React, {Component} from 'react';
import Image              from './image.jsx';
import Question           from './questions.jsx';
import FormSubmit         from './formSubmit.jsx';
// import style              from './../App.css'

export default class KnoledgeBlock extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {};
  }

render() {
  return (
      <div className="blockStyle">
        <Question question={this.props.question} />
        <Image    image={this.props.image}/>
        <FormSubmit options={this.props.options} answer={this.props.answer}/>
      </div>
    );
  }
}
