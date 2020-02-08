import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFiveRandom } from '../actions/index';

class InputNumbers extends Component{
  constructor(props){
    super(props);
    this.state = {
      numbersArray: [],
      noOfTickets: ''
    };
    this.onNumbersArrayInputChange = this.onNumbersArrayInputChange.bind(this);
    this.onNoOfTicketsInputChange = this.onNoOfTicketsInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onNumbersArrayInputChange(event){
    this.setState({
      numbersArray : event.target.value.split(',')
    })
  }

  onNoOfTicketsInputChange(event){
    this.setState({
      noOfTickets : event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.getFiveRandom(this.state);
    this.setState({
      numbersArray: [],
      noOfTickets : ''
    })
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input className="form-control"
          placeholder="Input Numbers between 1 to 39"
          value={this.state.numbersArray}
          onChange={this.onNumbersArrayInputChange} />
        <input className="form-control"
          placeholder="Input number of plays"
          value={this.state.noOfTickets}
          onChange={this.onNoOfTicketsInputChange} />
        <button type="submit" className="Submit">PLAY</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getFiveRandom }, dispatch);
}

export default connect(null, mapDispatchToProps)(InputNumbers);
