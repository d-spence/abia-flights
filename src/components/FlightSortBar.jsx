import React from 'react'

const FlightSortBar = ({ handleSortFlights }) => {
  return (
    <div className="m-2">
      <span className="text-lg font-bold bg-gray-200 border border-gray-400 rounded-t px-4 py-1">Sort By</span>
      <div className="grid grid-cols-5 bg-gray-400 rounded">
        <button onClick={() => handleSortFlights('airline')} className="btn sort-btn">Airline</button>
        <button onClick={() => handleSortFlights('flightNum')} className="btn sort-btn">Flight Number</button>
        <button onClick={() => handleSortFlights('city')} className="btn sort-btn">City</button>
        <button onClick={() => handleSortFlights('arrival')} className="btn sort-btn">Arrival</button>
        <button onClick={() => handleSortFlights('status')} className="btn sort-btn">Status</button>
      </div>
    </div>
  )
}

export default FlightSortBar;
