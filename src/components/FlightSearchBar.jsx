import React from 'react';
import { IoCloseCircle as CloseIcon } from 'react-icons/io5';

const FlightSearchBar = ({ searchText, handleSearch }) => {
  return (
    <span className="bg-gray-400 border border-gray-500 rounded shadow-md m-2" >
      <input
        type="text"
        value={searchText}
        onChange={e => handleSearch(e.target.value)}
        placeholder="Search Flights"
        className="w-44 md:w-auto text-center bg-gray-100 p-2 rounded ring-inset focus:ring-2 focus:ring-blue-300 focus:bg-white outline-none"
      />
      <CloseIcon
        onClick={() => handleSearch('')}
        className="inline text-gray-100 trans-med hover:text-red-500 h-6 w-6 m-0.5"
      />
    </span>
  )
}

export default FlightSearchBar;
