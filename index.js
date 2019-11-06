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
          <Select options={this.genNum(1, 31)} className="selectors" inputProps={{readOnly:true}} isSearchable={ false }/>
          <Select options={this.day} className="selectors" inputProps={{readOnly:true}} isSearchable={ false }/>
          <Select options={this.year} className="selectors" inputProps={{readOnly:true}} isSearchable={ false }/>
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
