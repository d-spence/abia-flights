import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FlightExpanded from './FlightExpanded';

const Flight = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li onClick={() => setExpanded(!expanded)} className="grid grid-cols-5 gap-1 flight">
      {!expanded
        ? <>
            <p className="text-xl text-center font-bold text-blue-900">{data.airlineName}</p>
            <p className="text-xl text-center font-bold">{data.TRN}</p>
            <p className="text-center font-bold">{data.city} ({data.CTY})</p>
            <p className="text-center font-bold">{data.ettFormatted}</p>
            <p className="text-center font-bold">{data.status}</p>
          </>
        : <FlightExpanded data={data} />
      }
    </li>
  )
}

Flight.propTypes = {
  data: PropTypes.object,
}

export default Flight;
