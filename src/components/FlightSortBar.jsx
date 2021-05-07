import React from 'react'

const FlightSortBar = ({ handleSortFlights }) => {
  return (
    <div className="grid grid-cols-5 bg-gray-400 rounded m-2">
      <button onClick={() => handleSortFlights('airline')} className="btn sort-btn">Airline</button>
      <button onClick={() => handleSortFlights('flightNum')} className="btn sort-btn">Flight Number</button>
      <button onClick={() => handleSortFlights('city')} className="btn sort-btn">City</button>
      <button onClick={() => handleSortFlights('arrival')} className="btn sort-btn">Arrival</button>
      <button onClick={() => handleSortFlights('status')} className="btn sort-btn">Status</button>
    </div>
  )
}

export default FlightSortBar;
