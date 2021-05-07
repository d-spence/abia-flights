import React, { useState, useEffect } from 'react';
import { 
  fetchApiData,
  sortFlights,
  updateRequired,
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
import FlightSortBar from './components/FlightSortBar';
import FlightList from './components/FlightList';

function App() {
  const [arrivals, setArrivals] = useState(null);
  const [departures, setDepartures] = useState(null);
  const [flights, setFlights] = useState([]); // flights based on view and sortBy
  const [sortBy, setSortBy] = useState('default');
  const [view, setView] = useState('arrivals');
  const [lastUpdate, setLastUpdate] = useState({arrivals: Date.now(), departures: 0});

  const handleSetView = (newView) => {
    // console.log(`setting view to ${newView}`);
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

  const handleSortFlights = (sortMethod) => {
    setSortBy((sortBy === sortMethod) ? 'default' : sortMethod);
    setFlights(sortFlights(flights, sortMethod));
  }

  const handleLoadFlights = (url, stateFunction, timeStampName='other') => {
    // Call the fetchApiData utility function using the param url
    // stateFunction is the setState function for the state item you want to update
    // timeStampName should be provided as either 'arrivals' or 'departures'

    fetchApiData(url)
      .then(data => {
        stateFunction(data); // sets the state (e.g. setArrivals)
        setFlights(data.flight);
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
    <div className="h-full w-full bg-gray-100">
      <NavBar />
      <div className="container mx-auto">
        <button 
          className="btn bg-blue-500 m-2 hover:text-white"
          onClick={() => handleLoadFlights(arrivalsTestUrl, setArrivals, view)}>
          Reload Flights
        </button>
        <FlightView view={view} handleSetView={handleSetView} />
        <FlightSortBar sortBy={sortBy} handleSortFlights={handleSortFlights} />
        <FlightList flights={flights} view={view} />
      </div>
    </div>
  );
}

export default App;
