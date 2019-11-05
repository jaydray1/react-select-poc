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

   month = [
  { value: '01', label: '01' },
  { value: '01', label: '02' },
  { value: '03', label: '03' }
]

  day = [
  { value: '01', label: '01' },
  { value: '01', label: '02' },
  { value: '03', label: '03' }
]

  year = [
  { value: '1990', label: '1990' },
  { value: '1991', label: '1991' },
  { value: '1992', label: '1992' }
]

  render() {
    return (
      <div style={{width: '100%'}}>
        <Hello name={this.state.name} />
        <div style={{width: '100%', display: 'flex', flexDirection: 'coloumn', justifyContent: 'space-around'}}>
          <Select options={this.month} className="selectors" inputProps={{readOnly:true}} isSearchable={ false }/>
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
