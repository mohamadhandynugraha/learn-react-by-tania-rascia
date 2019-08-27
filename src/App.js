import React, { Component } from "react";

import Jumbotron from './components/jumbotron/jumbotron.component';
import Table from './components/table/table.component';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Jumbotron />
        <Table />
      </div>
    );
  }
}

export default App;
