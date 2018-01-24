import React, {Component} from 'react';
import KnoledgeBlock      from './KnoledgeBlock.jsx';
import questions          from './../questions.json';

export default class Lesson extends Component {
  render() {
    return(
      <div >
        <h1 style={{textAlign: 'center'}}>Knowledge Check Block </h1>
        {questions.map(function(object, index){
          return <KnoledgeBlock key={index} question={object.question} options={object.options} answer={object.answer} image={object.image_url} explanation={object.answer_explanation}/>
        })}
      </div>
    );
  }
}
