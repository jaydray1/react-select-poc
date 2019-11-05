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
  { value: '02', label: '02' },
  { value: '03', label: '03' },
  { value: '04', label: '04' },
  { value: '05', label: '05' },
  { value: '06', label: '06' },
  { value: '07', label: '07' },
  { value: '08', label: '08' },
  { value: '09', label: '09' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
  { value: '21', label: '21' },
  { value: '22', label: '22' },
  { value: '23', label: '23' },
  { value: '24', label: '24' },
  { value: '25', label: '25' },
  { value: '26', label: '26' },
  { value: '27', label: '27' },
  { value: '28', label: '28' },
  { value: '29', label: '29' },
  { value: '30', label: '30' },
  { value: '31', label: '31' },

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
