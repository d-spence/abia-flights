import React from 'react'
import { GiCommercialAirplane as PlaneIcon } from 'react-icons/gi';

const NavBar = () => {
  return (
    <header className="bg-gradient-to-b from-blue-200 to-blue-400 p-2 md:p-4">
      <div className="container mx-auto p-2">
        <div className="text-blue-900 text-2xl md:text-4xl font-extrabold">
          ABIA Flight Monitor <PlaneIcon className="inline text-yellow-200 w-auto h-8 md:h-12" />
        </div>
        <p className="text-yellow-200 font-bold">Unofficial Austin-Bergstrom International Airport flight monitor</p>
      </div>
    </header>
  )
}

export default NavBar;
