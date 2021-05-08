import React from 'react';

const FlightSearchBar = ({ handleSearch }) => {
  return (
    <span>
      <input
        onChange={e => handleSearch(e.target.value)}
        placeholder='Search Flights'
        className="text-center bg-gray-100 border border-gray-400 rounded trans-med shadow-md p-2 m-2 focus:ring-2 focus:ring-blue-500 focus:bg-white">
      </input>
    </span>
  )
}

export default FlightSearchBar;
