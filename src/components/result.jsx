import React, {Component} from 'react';
import Style             from './../style.js';
import Correct            from 'react-icons/lib/fa/check-circle-o';
import Wrong          from 'react-icons/lib/fa/times-circle-o';
import FaRepeat           from 'react-icons/lib/fa/repeat';


export default class Result extends Component {

  render() {
  var result =(this.props.result === "correct") ?<div><Wrong size="3em"/> <p>Incorrect</p></div>:<div><Correct size="3em"/> <p>Correct</p></div>;
    return (
      <div className="fade">
      {result}
       <div className="padding-top">
        <a type="button" onClick={this.props.reset}> <FaRepeat size='1em' /> Take again </a>
       </div>
     </div>


    );
  }
}
