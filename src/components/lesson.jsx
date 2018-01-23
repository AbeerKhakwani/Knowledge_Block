import React, {Component} from 'react';
import KnoledgeBlock      from './knoledgeBlock.jsx';
import questions          from './../questions.json';



export default class Lesson extends Component {
  render() {
    return(
      <div>
        <h1>Knowledge Check Block </h1>
          {questions.map(function(object, index){
            return <KnoledgeBlock key={index} question={object.question} options={object.options} answer={object.answer} image={object.image_url}/>
          })}
      </div>
    );
  }
}
