import React from 'react'

const FlightSortBar = ({ handleSortFlights }) => {
  return (
    <div className="my-4 mx-2">
      <span className="text-lg font-bold bg-gray-200 border border-gray-500 rounded-t px-4 py-1">Sort By</span>
      <div className="grid grid-cols-5 bg-gray-500 rounded">
        <button onClick={() => handleSortFlights('airline')} className="btn sort-btn trans-med">Airline</button>
        <button onClick={() => handleSortFlights('flightNum')} className="btn sort-btn trans-med">Flight Number</button>
        <button onClick={() => handleSortFlights('city')} className="btn sort-btn trans-med">City</button>
        <button onClick={() => handleSortFlights('arrival')} className="btn sort-btn trans-med">Arrival</button>
        <button onClick={() => handleSortFlights('status')} className="btn sort-btn trans-med">Status</button>
      </div>
    </div>
  )
}

export default FlightSortBar;
