import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import Question1 from './components2/Question1'  
import Question2 from './components2/Question2'  
import Question3 from './components2/Question3'  
import {withRouter} from 'react-router-dom';

class Page2 extends Component {


  render() {
    return (
      <div>
      <div className="MainForm">
        <div className="HeaderForm">
          <div className="Step">STEP２</div>
          <div className="Title2">以下にお答えください</div>
        </div>
        <div className="StatusForm">
          <Question1
          className="target"
          />
          <Question2/>
          <Question3/>
        </div>
      </div>
      
      <Link to ="/Page1" className="NextButton1">前に戻る　≻ </Link>
      <Link to ="/Page3" className="NextButton2">次へ進む　≻ </Link>
     
    </div>
    )
  }
}

export default withRouter(Page2)