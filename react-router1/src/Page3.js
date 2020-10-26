import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

class Page3 extends Component {

  render() {
    return (
      <div>
        <div className="MainForm">
          <div className="HeaderForm">
            <div className="Step">STEP３</div>
            <div className="Title3">ご相談内容をご記入ください</div>
          </div>
          <div className="StatusForm">
            <div style={{ color: "blue" }}>-ご相談内容-</div>
            <textarea></textarea>
          </div>
        </div>
        <Link to="/Page2"
          className="NextButton1">前に戻る　≻</Link>
        <Link to="/Page3"
          className="NextButton2">次へ進む　≻</Link>
      </div>

    )
  }
}

export default Page3