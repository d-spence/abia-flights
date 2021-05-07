import React from 'react';

const FlightSearchBar = () => {
  const handleChange = (text) => {
    console.log(text);
  }

  return (
    <span>
      <input
        onChange={e => handleChange(e.target.value)}
        placeholder='Search Flights'
        className="text-center bg-gray-200 border border-gray-400 rounded trans-med shadow-md p-2 m-2 focus:ring-2 focus:ring-blue-500 focus:bg-white">
      </input>
    </span>
  )
}

export default FlightSearchBar;
