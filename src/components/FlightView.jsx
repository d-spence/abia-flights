import React from 'react'
import {
  GiAirplaneArrival as ArrivalIcon,
  GiAirplaneDeparture as DepartureIcon,
} from 'react-icons/gi';

const FlightView = ({ view, handleSetView }) => {
  const arrivalsStyle = "bg-yellow-300 hover:bg-yellow-200";
  const departuresStyle = "bg-green-300 hover:bg-green-200";
  const defaultStyle = "text-gray-600 bg-gray-300 hover:bg-gray-200";

  return (
    <div className="flex w-full justify-center">
      <span className="flex flex-row bg-gray-500 w-full md:w-auto rounded shadow-md m-2">
        <div
          onClick={() => handleSetView('arrivals')}
          className={`btn-view trans-med ${(view === 'arrivals') ? arrivalsStyle : defaultStyle}`}>
          <ArrivalIcon className="inline w-auto h-7 md:h-10" /> ARRIVALS
        </div>
        <div
          onClick={() => handleSetView('departures')}
          className={`btn-view trans-med ${(view === 'departures') ? departuresStyle : defaultStyle}`}>
          DEPARTURES <DepartureIcon className="inline w-auto h-7 md:h-10" />
        </div>
      </span>
    </div>
  )
}

export default FlightView
