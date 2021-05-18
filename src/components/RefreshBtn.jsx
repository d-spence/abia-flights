import React from 'react';
import { MdRefresh as RefreshIcon } from 'react-icons/md';
import { getDateString } from '../utilities';
import {
  arrivalsUrl,
  departuresUrl,
  arrivalsTestUrl,
  departuresTestUrl,
} from '../config';

const RefreshBtn = ({ handleLoadFlights, view, lastUpdate }) => {
  const handleRefreshFlights = () => {
    return;
  }

  return (
    <div className="flex flex-row items-center">
      <div>
        <div className="text-sm">Last Update:</div>
        <div className="text-sm">{getDateString(lastUpdate[view])}</div>
      </div>
      <button
        className="flex justify-center items-center btn bg-blue-500 hover:bg-blue-400 m-2 p-0 trans-med"
        onClick={handleRefreshFlights}>
        <RefreshIcon className="w-8 h-auto" />
      </button>
    </div>
  );
}

export default RefreshBtn;
