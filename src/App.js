import React, { useState, useEffect } from 'react';
import { 
  fetchApiData,
  sortFlights,
} from './utilities';
import {
  apiUrl,
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

  const filterFlights = () => {
    if (view === 'arrivals') {
      setFlights(arrivals?.flight || []);
    } else {
      setFlights(departures?.flight || []);
    }
  }

  const handleSetView = (newView) => {
    console.log(`setting view to ${newView}`);
    setView(newView);
  }

  const handleSortFlights = (sortMethod) => {
    // setSortBy((sortBy === sortMethod) ? 'default' : sortMethod);
    setFlights(sortFlights(flights, sortMethod));
  }

  const handleLoadFlights = () => {
    fetchApiData(arrivalsTestUrl)
      .then(data => {
        setArrivals(data);
        setFlights(data.flight);
      })
    // fetchApiData(departuresTestUrl).then(data => setDepartures(data));
  }

  useEffect(() => {
    handleLoadFlights();
    console.log('App useEffect hook was triggered');
  }, []);

  return (
    <div className="h-full w-full bg-gray-100">
      <NavBar />
      <div className="container mx-auto">
        <button className="btn bg-blue-500 m-2 hover:text-white" onClick={handleLoadFlights}>Reload Flights</button>
        <FlightView view={view} handleSetView={handleSetView} />
        <FlightSortBar handleSortFlights={handleSortFlights} />
        <FlightList flights={flights} view={view} />
      </div>
    </div>
  );
}

export default App;
