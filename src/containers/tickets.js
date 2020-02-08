import React, { Component } from 'react';
import { connect } from 'react-redux';

class TicketList extends Component {

  getSeparateTickets(ticketsArray){
    const finalTickets = ticketsArray.map(number => number + '');
    return(
      finalTickets.map((item, i) => {
        return (
          <tr key={i}>
            <td>{item}</td>
          </tr>
        )
      })
    )
  }

  render(){
    return(
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Tickets</th>
            </tr>
          </thead>
          <tbody>
            {this.props.randomizer.map(this.getSeparateTickets)}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    randomizer: state.randomizer
  };
}

export default connect(mapStateToProps)(TicketList);
