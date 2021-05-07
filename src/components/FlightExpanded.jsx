import React from 'react'
import PropTypes from 'prop-types'

const FlightExpanded = ({ data }) => {
  return (
    <>
      <div>
        <p className="text-xl text-center font-bold text-blue-900">{data.airlineName}</p>
        <p className="text-center text-gray-600">Registry: {data.REG}</p>
        <p className="text-center text-gray-600">Type: {data.TYP}</p>
      </div>
      <div>
        <p className="text-xl text-center font-bold">{data.TRN}</p>
        <p className="text-center text-gray-600">{data.flightNumber}</p>
      </div>
      <div>
        <p className="text-center font-bold">{data.city} ({data.CTY})</p>
      </div>
      <div>
        <p className="text-center font-bold">{data.ettFormatted}</p>
        <p className="text-center text-gray-600">{data.sttDate}</p>
      </div>
      <div>
        <p className="text-center font-bold">{data.status}</p>
        <p className="text-center text-gray-600">Gate: {data.gate}</p>
        <p className="text-center text-gray-600">Bags: {data.bags}</p>
      </div>
    </>
  )
}

FlightExpanded.propTypes = {
  data: PropTypes.object,
}

export default FlightExpanded;
