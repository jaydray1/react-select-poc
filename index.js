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

   options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div style={{width: '120px'}}>
          <Select options={this.options} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
