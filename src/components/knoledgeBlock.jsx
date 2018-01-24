import React, {Component} from 'react';
import Image              from './image.jsx';
import Question           from './questions.jsx';
import FormSubmit         from './formSubmit.jsx';
// import style              from './../App.css'

export default class KnoledgeBlock extends Component {

render() {
  return (
      <div className="block-style">
        <Question question={this.props.question} />
        <Image    image={this.props.image}/>
        <FormSubmit options={this.props.options} answer={this.props.answer} explanation={this.props.explanation}/>
      </div>
    );
  }
}
