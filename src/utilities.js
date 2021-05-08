// Utility functions
import { defaultRefresh } from './config';

const fetchApiData = (url) => {
  // Request data from API returned as a promise
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
}

const sortFlights = (flights, sortBy) => {
  let sortedFlights = flights.slice();

  switch(sortBy) {
    case 'airline':
      return sortByString(sortedFlights, 'airlineName');
    case 'flightNum':
      return sortByNum(sortedFlights, 'TRN');
    case 'city':
      return sortByString(sortedFlights, 'city');
    case 'arrival':
      return sortByNum(sortedFlights, 'timeInMillis');
    case 'status':
      return sortByString(sortedFlights, 'status');
    default:
      return sortedFlights;
  }
}

const sortByString = (flights, attribute) => {
  flights.sort((a, b) => {
    let fa = a[attribute].toLowerCase();
    let fb = b[attribute].toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
  });

  return flights;
}

const sortByNum = (flights, attribute) => {
  flights.sort((a, b) => +a[attribute]- +b[attribute]);
  return flights;
}

const updateRequired = (timeStamp, threshhold=defaultRefresh) => {
  // Returns true if timestamp comparison is over threshhold; else false
  let newTimeStamp = Date.now();
  return (newTimeStamp - timeStamp > threshhold) ? true : false;
}

const filterFlights = (flights, text) => {
  // Returns a filtered list of flights who's attribute values match text
  const attributes = ['airlineName', 'flightNumber', 'city'];

  return flights.filter(flight => {
    // true if any of the flight's attributes include the text
    if (attributes.some(attr => (
      flight[attr].toLowerCase().includes(text.toLowerCase())
    ) ? true : false)) {
      return true;
    }
    return false;
  });
}

export {
  fetchApiData,
  sortFlights,
  updateRequired,
  filterFlights,
}