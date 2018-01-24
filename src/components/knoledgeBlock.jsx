import React, {Component} from 'react';
import Question           from './Questions.jsx';
import FormSubmit         from './FormSubmit.jsx';

export default class KnoledgeBlock extends Component {

render() {
  return (
      <div className="block-style">
        <Question question={this.props.question} image={this.props.image} />
        <FormSubmit options={this.props.options} answer={this.props.answer} explanation={this.props.explanation}/>
      </div>
    );
  }
}
