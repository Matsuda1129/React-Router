import React, { Component } from 'react';
import FirstForm from './components/FirstForm'
import './App.css';
import PropTypes from 'prop-types'  
import {Link} from 'react-router-dom'

const years =  [
    { name: "1989年（平成元年）" },
    { name: "1990年（平成2）" },
    { name: "1991年（平成3）" },
    { name: "1992年（平成4）" },
    { name: "1993年（平成5）" },
    { name: "1994年（平成6）" },
    { name: "1995年（平成7）" },
    { name: "1996年（平成8）" },
    { name: "1997年（平成9）" },
    { name: "1998年（平成10）" },
    { name: "1999年（平成11）" },
    { name: "2000年（平成12）" },
  ];

const months = []

for(let i = 1; i < 13; i++){
  months.push({name: i})
}

const days = []

for(let i = 1; i < 32; i++){
  days.push({name: i})
}

console.log(months);

class Page1 extends Component {

  constructor() {
    super()
    this.state = { months, days,years,usstate: '',};
    this.onChange = this.onChange.bind
    this.handleToPage2 = this.handleToPage2.bind
  }

  onChange(e){
    console.log(e.target.value);
    this.setState({ usstate: e.target.value});
  }

  handleToPage1() {
    this.props.history.push('/Page1')
  }
  handleToPage2() {
    this.props.history.push('/Page2')
  }
  handleToPage3() {
    this.props.history.push('/Page3')
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

render(){
  return(
    <div>
    <FirstForm
    years = {this.state.years}
    months = {this.state.months}
    days = {this.state.days}
    />

    <Link to ="./Page2" className="NextButton">次へ進む　≻ </Link>

</div>
  )
}
}

export default Page1;
