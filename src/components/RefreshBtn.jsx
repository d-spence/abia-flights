import React, { useState, useEffect } from 'react';
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
  const [refreshing, setRefreshing] = useState(false);

  const btnEnabledStyle = 'bg-blue-500 hover:bg-blue-400 text-blue-100';
  const btnDisabledStyle = 'bg-gray-400 text-gray-500 cursor-default';

  useEffect(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [lastUpdate])

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
        <div className={`${refreshing && 'bg-gray-600 text-yellow-200'} text-sm md:text-base text-center rounded trans-med`}>
          {getDateString(lastUpdate[view])}
        </div>
      </div>
      <button
        className={`flex justify-center items-center btn m-2 p-0 trans-med ${btnEnabled ? btnEnabledStyle : btnDisabledStyle}`}
        onClick={handleRefreshFlights}>
        <RefreshIcon className={`${refreshing && 'animate-spin text-yellow-200'} w-8 md:w-10 h-auto`} />
      </button>
    </div>
  );
}

export default RefreshBtn;
