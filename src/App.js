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
  const [flights, setFlights] = useState({arrivals: [], departures: []});
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [view, setView] = useState('arrivals');
  const [lastUpdate, setLastUpdate] = useState({arrivals: Date.now(), departures: 0});

  const handleSetView = (newView) => {
    if (view !== newView) {
      setView(newView);
      if (newView === 'arrivals' && updateRequired(lastUpdate.arrivals)) {
        handleLoadFlights(arrivalsTestUrl, 'arrivals');
      } else if (updateRequired(lastUpdate.departures)) {
        handleLoadFlights(departuresTestUrl, 'departures');
      }

      setFilteredFlights(flights[newView]);
    }
  }

  const handleSearch = (text) => {
    setSearchText(text);
    setFilteredFlights(filterFlights(flights[view], text));
  }

  const handleSortFlights = (sortMethod) => {
    setSortBy((sortBy === sortMethod) ? 'default' : sortMethod);
    setFilteredFlights(sortFlights(filteredFlights, sortMethod));
  }

  const handleLoadFlights = (url, category='none') => {
    // Call the fetchApiData utility function using the param url
    // category should be provided as either 'arrivals' or 'departures'

    fetchApiData(url)
      .then(data => {
        setFlights({...flights, [category]: data});
        setFilteredFlights(data);
        setLastUpdate({...lastUpdate, [category]: Date.now()}); // update lastUpdate
        console.log(`API request made to ${url}`);
      });
  }

  useEffect(() => {
    // Run this on app startup
    handleLoadFlights(arrivalsTestUrl, 'arrivals');
    console.log('App useEffect hook was triggered');
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container overflow mx-auto">
        <div className="flex w-full justify-between">
          <FlightSearchBar searchText={searchText} handleSearch={handleSearch} />
          <button
            className="flex justify-center items-center btn bg-blue-500 m-2 p-0 w-10 h-10 hover:text-white"
            onClick={() => handleLoadFlights(arrivalsTestUrl, view)}>
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
