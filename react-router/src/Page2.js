import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Question1 from './components2/Question1'
import Question2 from './components2/Question2'
import Question3 from './components2/Question3'

class Page2 extends Component {

  constructor() {
    super();
    this.state = { value: "", value2: "" }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }


  getclass(value) {
    if (value === "yes" || value === "no") {
      return "";
    } else {
      return "target";
    }
  }

  getclass2(value2) {
    if (value2 === "yes" || value2 === "no") {
      return "";
    } else {
      return "target";
    }
  }

  render() {
    // const {value} = this.state;
    return (
      <div>
        <div className="MainForm" >
          <div className="HeaderForm">
            <div id="target1" className="Step">STEP２</div>
            <div className="Title2">以下にお答えください</div>
          </div>
          <div className="StatusForm">
            <Question1
              value={this.state.value}
              onChange={this.onChange}
            />
            <div className={this.getclass(this.state.value)}>
              <Question2
              value2={this.state.value2}
              onChange={this.onChange}
               />
            </div>
            <div className={this.getclass2(this.state.value2)}>
            <Question3 />
            </div>
          </div>
        </div>
        <Link to="/" className="NextButton1">前に戻る　≻ </Link>
        <Link to="/Page3" className="NextButton2">次へ進む　≻ </Link>
      </div>
    )
  }
}

export default Page2