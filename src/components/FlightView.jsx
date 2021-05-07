import React from 'react'
import {
  GiAirplaneArrival as ArrivalIcon,
  GiAirplaneDeparture as DepartureIcon,
} from 'react-icons/gi';

const FlightView = ({ view, handleSetView }) => {
  const arrivalsStyle = "md:text-xl md:w-56 btn trans-med bg-yellow-300 hover:bg-yellow-200";
  const departuresStyle = "md:text-xl md:w-56 btn trans-med bg-green-300 hover:bg-green-200";
  const defaultStyle = "md:text-xl md:w-56 btn trans-med text-gray-600 bg-gray-300 hover:bg-gray-200";

  return (
    <div className="flex w-full justify-center">
      <span className="bg-gray-400 border border-gray-400 rounded shadow-md m-0">
        <button onClick={() => handleSetView('arrivals')} className={(view === 'arrivals') ? arrivalsStyle : defaultStyle}>
          <ArrivalIcon className="inline w-auto h-10" /> ARRIVALS
        </button>
        <button onClick={() => handleSetView('departures')} className={(view === 'departures') ? departuresStyle : defaultStyle}>
          DEPARTURES <DepartureIcon className="inline w-auto h-10" />
        </button>
      </span>
    </div>
  )
}

export default FlightView
