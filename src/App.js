import React, { Component } from "react";

import Jumbotron from './components/jumbotron/jumbotron.component';
import Table from './components/table/table.component';
import Form from './components/form/form.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div className='container'>
        <Jumbotron />
        <Table users={this.state.users} removeUser={this.removeUser}/>
        <Form handleSubmit={this.handleSubmit}/>
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

  handleSubmit = user => {
    this.setState({users: [...this.state.users, user]});
  }

}

export default App;
