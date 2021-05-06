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
  // console.log(sortedFlights);

  switch(sortBy) {
    case 'airline':
      return sortByAirline(sortedFlights);
    case 'flightNum':
      return sortByFlightNum(sortedFlights);
    case 'city':
      return sortByCity(sortedFlights);
    default:
      return sortedFlights;
  }
}

const sortByAirline = (flights) => {
  flights.sort((a, b) => {
    let fa = a.airlineName.toLowerCase();
    let fb = b.airlineName.toLowerCase();

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

const sortByFlightNum = (flights) => {
  flights.sort((a, b) => +a.TRN - +b.TRN);
  return flights;
}

const sortByCity = (flights) => {
  flights.sort((a, b) => {
    let fa = a.city.toLowerCase();
    let fb = b.city.toLowerCase();

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

export {
  fetchApiData,
  sortFlights,
}