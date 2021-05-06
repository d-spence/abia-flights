import React, { useState, useEffect } from 'react';
import { fetchApiData } from './utilities';
import {
  apiUrl,
  arrivalsUrl,
  departuresUrl,
  arrivalsTestUrl,
  departuresTestUrl,
} from './config';

// import components
import NavBar from './components/NavBar';
import FlightListHeader from './components/FlightListHeader';
import FlightList from './components/FlightList';

function App() {
  const [arrivals, setArrivals] = useState(null);
  const [departures, setDepartures] = useState(null);
  const [flights, setFlights] = useState([]); // flights according to current view
  const [view, setView] = useState('arrivals');

  const filterFlights = () => {
    if (view === 'arrivals') {
      setFlights(arrivals?.flight || []);
    } else {
      setFlights(departures?.flight || []);
    }
  }

  const loadFlights = () => {
    fetchApiData(arrivalsTestUrl).then(data => {
      setArrivals(data);
      filterFlights();
    });
    // fetchApiData(departuresTestUrl).then(data => setDepartures(data));
  }

  useEffect(() => {
    loadFlights();
    console.log('App useEffect hook was triggered');
  }, []);

  return (
    <div className="h-full w-full bg-gray-100">
      <NavBar />
      <div className="container mx-auto">
        <button className="btn bg-blue-500 m-2 hover:text-white" onClick={loadFlights}>Reload Flights</button>
        <h1 className="text-2xl mx-2">{view.toUpperCase()}</h1>
        <FlightListHeader />
        <FlightList flights={flights} view={view} />
      </div>
    </div>
  );
}

export default App;
