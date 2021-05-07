import React from 'react'

const FlightSortBar = ({ sortBy, handleSortFlights, view }) => {
  const activeStyle = 'btn trans-med bg-blue-300 hover:bg-blue-200';
  const defaultStyle = 'btn trans-med text-gray-700 bg-gray-300 hover:bg-gray-200';

  return (
    <div className="my-4 mx-2">
      <span className="text-lg font-bold bg-gray-200 border border-gray-500 rounded-t px-4 py-1">Sort By</span>
      <div className="grid grid-cols-5 bg-gray-500 rounded">
        <button 
          onClick={() => handleSortFlights('airline')}
          className={(sortBy === 'airline') ? activeStyle : defaultStyle}>
          Airline
        </button>
        <button 
          onClick={() => handleSortFlights('flightNum')}
          className={(sortBy === 'flightNum') ? activeStyle : defaultStyle}>
          Flight Number
        </button>
        <button 
          onClick={() => handleSortFlights('city')}
          className={(sortBy === 'city') ? activeStyle : defaultStyle}>
          City
        </button>
        <button 
          onClick={() => handleSortFlights('arrival')}
          className={(sortBy === 'arrival') ? activeStyle : defaultStyle}>
          {(view === 'arrivals') ? 'Arrival' : 'Departure'}
        </button>
        <button 
          onClick={() => handleSortFlights('status')}
          className={(sortBy === 'status') ? activeStyle : defaultStyle}>
          Status
        </button>
      </div>
    </div>
  )
}

export default FlightSortBar;
