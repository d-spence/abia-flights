import React from 'react'
import PropTypes from 'prop-types'

const Flight = ({ data }) => {
  return (
    <li className="grid grid-cols-5 gap-1 bg-gray-200 border border-gray-400 rounded my-2 p-2">
      <p className="text-xl text-center">{data.airlineName}</p>
      <p className="text-center">{data.TRN}</p>
      <p className="text-center">{data.city} ({data.CTY})</p>
      <p className="text-center">{data.ettFormatted}</p>
      <p className="text-center">{data.status}</p>
    </li>
  )
}

Flight.propTypes = {
  data: PropTypes.object,
}

export default Flight;
