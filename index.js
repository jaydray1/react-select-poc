import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Select from 'react-select';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React Select'
    };
  }
  highYear = new Date().getFullYear();

  months = [
    {value: '01', label: 'January'},
    {value: '02', label: 'February'},
    {value: '03', label: 'March'},
    {value: '04', label: 'April'},
    {value: '05', label: 'May'},
    {value: '06', label: 'June'},
    {value: '07', label: 'July'},
    {value: '08', label: 'August'},
    {value: '09', label: 'September'},
    {value: '10', label: 'October'},
    {value: '11', label: 'November'},
    {value: '12', label: 'December'}
  ]

  isMobile = () => {
  const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || w < 768) {
    return true;
  }
};

genNum = (low, high) => {
  var arr = [];
  while(low <= high){
    arr.push(low++);
  }
  return this.getString(arr);
}

getString = (arr) => {
  let thisArray = [];
  arr.map((el) => {
  let optionsObject = { value: '', label: ''};
    el = el.toString();
    if (el.length < 2) {
      el = '0' + el;
    }
    optionsObject.value = el;
    optionsObject.label = el;
    thisArray.push(optionsObject)
  })
  return thisArray;
}

  render() {
    return (
      <div style={{width: '100%'}}>
        <Hello name={this.state.name} />
        <div style={{width: '100%', display: 'flex', flexDirection: 'coloumn', justifyContent: 'space-around'}}>
          <Select options={this.months} className="selectors" inputProps={{readOnly: this.isMobile ? false : true}} isSearchable={ this.isMobile ? false : true }/>
          <Select options={this.genNum(1, 31)} className="selectors" inputProps={{readOnly:true}} isSearchable={ false }/>
          <Select options={this.genNum(1930, this.highYear)} className="selectors" inputProps={{readOnly:true}} isSearchable={ false }/>
        </div>
        <div style={{width: '120px', marginTop: '5em'}}>
        <input list="browsers" name="browser"/>
        <datalist id="browsers">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </datalist>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
