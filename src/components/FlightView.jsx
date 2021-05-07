import React from 'react'
import {
  GiAirplaneArrival as ArrivalIcon,
  GiAirplaneDeparture as DepartureIcon,
} from 'react-icons/gi';

const FlightView = ({ view, handleSetView }) => {
  const activeStyle = "view-btn btn trans-med bg-green-300 hover:bg-green-200";
  const defaultStyle = "view-btn btn trans-med text-gray-600 bg-gray-300 hover:bg-gray-200";

  return (
    <div className="flex w-full justify-center">
      <span className="bg-gray-400 border border-gray-400 rounded m-2">
        {/* <div className="text-2xl mx-2">
          {view.toUpperCase()} <ArrivalIcon className="inline" />
        </div> */}
        <button onClick={() => handleSetView('arrivals')} className={(view === 'arrivals') ? activeStyle : defaultStyle}>
          <ArrivalIcon className="inline w-auto h-10" /> ARRIVALS
        </button>
        <button onClick={() => handleSetView('departures')} className={(view === 'departures') ? activeStyle : defaultStyle}>
          DEPARTURES <DepartureIcon className="inline w-auto h-10" />
        </button>
      </span>
    </div>
  )
}

export default FlightView
