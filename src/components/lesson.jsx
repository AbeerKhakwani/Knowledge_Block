import React, {Component} from 'react';
import KnoledgeBlock      from './knoledgeBlock.jsx';
import questions          from './../questions.json';


export default class Lesson extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {};
  }

  render() {src/images/abeer.JPG
    console.log(questions);
    return(
      <div>
        <h1>Knowledge Check Block </h1>
        <KnoledgeBlock question="What is this a picture of?" options={["cookie","donuts","ummm"]} answer="ummm" image="./../images/giphy.gif"/>
        <KnoledgeBlock question="What is this a picture of?" options={["person","coffee"]} answer="person" image="./../images/abeer.JPG"/>
      </div>
    );
  }
}
