import { GET_FIVE_RANDOM } from '../actions/index'
import _ from 'lodash';


function getLotteryNumbersList(numbersArray, noOfTickets){
  var numbersForEachTicket = 5;
  var ticketList = [];
  for(let i= 0; i<=noOfTickets-1; i++){
    let result = new Array(numbersForEachTicket),
        len = numbersArray.length,
        taken = new Array(len);

    if (numbersForEachTicket > len)
        throw new RangeError("more elements taken than available");

    while (numbersForEachTicket--) {
        let x = Math.floor(Math.random() * len);
        result[numbersForEachTicket] = numbersArray[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    numbersForEachTicket = 5;
    ticketList.push(result);
  }
  return ticketList;
}


export default function(state = [], action){
  switch(action.type){
    case GET_FIVE_RANDOM:
    return [getLotteryNumbersList(action.payload.numbersArray, action.payload.noOfTickets), ...state];
  }
  return state;
}
