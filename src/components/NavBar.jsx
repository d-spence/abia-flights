import React from 'react'
import { GiCommercialAirplane as PlaneIcon } from 'react-icons/gi';
import abiaLogo from '../images/abia-logo.png';

const NavBar = () => {
  return (
    <header className="bg-gradient-to-b from-blue-200 to-blue-400 p-2 md:p-4">
      <div className="flex flex-row items-center container mx-auto p-1 md:p-2">
        <img className="h-20 w-auto mr-4" src={abiaLogo} alt="" />
        <div>
          <div className="text-blue-900 text-2xl md:text-4xl font-extrabold">
            ABIA Flight Monitor
          </div>
          <p className="text-yellow-200 font-bold">
            Unofficial Austin-Bergstrom International Airport flight monitor
          </p>
        </div>
        <a className="ml-auto" href="https://github.com/d-spence/abia-flights" target="_blank" rel="noreferrer">
          <PlaneIcon className="text-blue-100 hover:text-yellow-100 w-10 h-10 m-1" />
        </a>
      </div>
    </header>
  );
}

export default NavBar;
