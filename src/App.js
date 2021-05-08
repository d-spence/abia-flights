import React, { useState, useEffect } from 'react';
import { MdRefresh as RefreshIcon } from 'react-icons/md';
import { 
  fetchApiData,
  sortFlights,
  updateRequired,
  filterFlights,
} from './utilities';
import {
  arrivalsUrl,
  departuresUrl,
  arrivalsTestUrl,
  departuresTestUrl,
} from './config';

// import components
import NavBar from './components/NavBar';
import FlightView from './components/FlightView';
import FlightSearchBar from './components/FlightSearchBar';
import FlightSortBar from './components/FlightSortBar';
import FlightList from './components/FlightList';

function App() {
  const [arrivals, setArrivals] = useState(null);
  const [departures, setDepartures] = useState(null);
  const [flights, setFlights] = useState([]); // flights based on view and sortBy
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [view, setView] = useState('arrivals');
  const [lastUpdate, setLastUpdate] = useState({arrivals: Date.now(), departures: 0});

  const handleSetView = (newView) => {
    if (view !== newView) {
      setView(newView);
      if (newView === 'arrivals') {
        updateRequired(lastUpdate.arrivals)
          ? handleLoadFlights(arrivalsTestUrl, setArrivals, 'arrivals')
          : setFlights(arrivals.flight);
      } else {
        updateRequired(lastUpdate.departures)
          ? handleLoadFlights(departuresTestUrl, setDepartures, 'departures')
          : setFlights(departures.flight);
      }
    }
  }

  const handleSearch = (text) => {
    setSearchText(text);
    setFilteredFlights(filterFlights(flights, text));
  }

  const handleSortFlights = (sortMethod) => {
    setSortBy((sortBy === sortMethod) ? 'default' : sortMethod);
    setFilteredFlights(sortFlights(filteredFlights, sortMethod));
  }

  const handleLoadFlights = (url, stateFunction, timeStampName='other') => {
    // Call the fetchApiData utility function using the param url
    // stateFunction is the setState function for the state item you want to update
    // timeStampName should be provided as either 'arrivals' or 'departures'

    fetchApiData(url)
      .then(data => {
        stateFunction(data); // sets the state (e.g. setArrivals)
        setFlights(data.flight);
        setFilteredFlights(data.flight);
        setLastUpdate({...lastUpdate, [timeStampName]: Date.now()}); // update lastUpdate
        console.log(`API request made to ${url}`);
      });
  }

  useEffect(() => {
    // Run this on app startup
    handleLoadFlights(arrivalsTestUrl, setArrivals, 'arrivals');
    console.log('App useEffect hook was triggered');
  }, []);

  return (
    <div className="h-screen w-full bg-gray-100">
      <NavBar />
      <div className="container overflow mx-auto">
        <div className="flex w-full justify-between">
          <FlightSearchBar searchText={searchText} handleSearch={handleSearch} />
          <button
            className="flex justify-center items-center btn bg-blue-500 m-2 p-0 w-10 h-10 hover:text-white"
            onClick={() => handleLoadFlights(arrivalsTestUrl, setArrivals, view)}>
            <RefreshIcon className="w-8 h-auto" />
          </button>
        </div>
        <FlightView view={view} handleSetView={handleSetView} />
        <FlightSortBar sortBy={sortBy} handleSortFlights={handleSortFlights} view={view} />
        <FlightList flights={filteredFlights} view={view} />
      </div>
    </div>
  );
}

export default App;
