import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  MdExpandMore,
  MdExpandLess,
} from 'react-icons/md';
import FlightExpanded from './FlightExpanded';

const Flight = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="grid grid-cols-5 gap-1 bg-gray-200 border border-gray-400 rounded my-2 pt-2 hover:bg-blue-100 hover:shadow trans-med">
      {!expanded
        ? <>
            <p className="md:text-xl text-center font-bold text-blue-900">{data.airlineName}</p>
            <p className="md:text-xl text-center font-bold">{data.TRN}</p>
            <p className="text-xs md:text-base text-center font-bold">{data.city} ({data.CTY})</p>
            <p className="text-sm md:text-base text-center font-bold">{data.ettFormatted}</p>
            <p className="text-sm md:text-base text-center font-bold">{data.status}</p>
          </>
        : <FlightExpanded data={data} />
      }
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex justify-center col-span-full rounded-b hover:bg-blue-200 trans-med">
        {!expanded
          ? <MdExpandMore className="text-blue-500 h-6 w-auto -m-1" />
          : <MdExpandLess className="text-blue-900 h-6 w-auto -m-1" />
        }
      </div>
    </li>
  );
}

Flight.propTypes = {
  data: PropTypes.object,
}

export default Flight;
