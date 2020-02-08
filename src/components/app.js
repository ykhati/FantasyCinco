import React, { Component } from 'react';
import InputNumbers from '../containers/input_numbers';
import TicketList from '../containers/tickets'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Mío Loteria - Fantasía Cinco</h1>
        <InputNumbers />
        <TicketList />
      </div>
    );
  }
}
