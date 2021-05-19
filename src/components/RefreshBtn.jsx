import React, { useState } from 'react';
import { MdRefresh as RefreshIcon } from 'react-icons/md';
import { getDateString } from '../utilities';
import {
  arrivalsUrl,
  departuresUrl,
  arrivalsTestUrl,
  departuresTestUrl,
  minRefreshTime,
} from '../config';

const RefreshBtn = ({ handleLoadFlights, view, lastUpdate }) => {
  const [btnEnabled, setBtnEnabled] = useState(true);

  const btnEnabledStyle = 'bg-blue-500 hover:bg-blue-400 text-blue-100';
  const btnDisabledStyle = 'bg-gray-400 text-gray-500 cursor-default';

  const handleRefreshFlights = () => {
    if ((Date.now() - lastUpdate[view]) > minRefreshTime) {
      const refreshUrl = (view === 'arrivals') ? arrivalsUrl : departuresUrl;
      handleLoadFlights(refreshUrl, view);
    }
    
    setBtnEnabled(false);
    setTimeout(() => {
      setBtnEnabled(true);
    }, minRefreshTime);
  }

  return (
    <div className="flex flex-row items-center">
      <div>
        <div className="text-xs md:text-base font-bold">Last Update:</div>
        <div className="text-sm md:text-base">{getDateString(lastUpdate[view])}</div>
      </div>
      <button
        className={`flex justify-center items-center btn m-2 p-0 trans-med ${btnEnabled ? btnEnabledStyle : btnDisabledStyle}`}
        onClick={handleRefreshFlights}>
        <RefreshIcon className="w-8 md:w-10 h-auto" />
      </button>
    </div>
  );
}

export default RefreshBtn;
