// Utility functions

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

export {
  fetchApiData,
  sortFlights,
}