import React, { Component } from "react";

import Jumbotron from './components/jumbotron/jumbotron.component';
import Table from './components/table/table.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [
        {
          firstName: 'Hotman',
          lastName: 'Paris',
          email: 'hotman@paris.com'
        },
        {
          firstName: 'Colt',
          lastName: 'Steele',
          email: 'colt@steele.com'
        },
        {
          firstName: 'Larry',
          lastName: 'The Bird',
          email: 'Larry@bird.com'
        },
        
      ]
    }
  }

  render() {
    return (
      <div className='container'>
        <Jumbotron />
        <Table users={this.state.users} removeUser={this.removeUser}/>
      </div>
    );
  }

  removeUser = (index) => {
    const { users } = this.state;
    this.setState({
      users: users.filter((user, i) => {
        return i !== index
      })
    });
  }

}

export default App;
