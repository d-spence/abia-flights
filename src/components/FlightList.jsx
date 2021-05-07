import React from 'react';
import PropTypes from 'prop-types';

// components
import Flight from './Flight';

const FlightList = ({ flights }) => {
  return (
    <div className="m-2 mb-10">
      <ul>
        {flights.map(flight => {
          return <Flight
            key={`${flight.flightNumber} ${flight.CTY}`}
            data={flight}
          />
        })}
      </ul>
    </div>
  )
}

FlightList.propTypes = {
  arrivals: PropTypes.object,
  departures: PropTypes.object,
  view: PropTypes.string,
}

export default FlightList;
