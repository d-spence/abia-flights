import React, { useState, useEffect, useRef } from 'react';
import { 
  fetchApiData,
  sortFlights,
  updateRequired,
  searchFlights,
} from './utilities';
import {
  arrivalsUrl,
  departuresUrl,
  arrivalsTestUrl,
  departuresTestUrl,
  defaultRefresh,
} from './config';

// import components
import NavBar from './components/NavBar';
import ScrollTop from './components/ScrollTop';
import FlightView from './components/FlightView';
import FlightSearchBar from './components/FlightSearchBar';
import RefreshBtn from './components/RefreshBtn';
import FlightSortBar from './components/FlightSortBar';
import FlightList from './components/FlightList';
import Footer from './components/Footer';

function App() {
  const [flights, setFlights] = useState({arrivals: [], departures: []});
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [view, setView] = useState('arrivals');
  const [lastUpdate, setLastUpdate] = useState({arrivals: 0, departures: 0});
  const refreshTimer = useRef(null);

  const handleSetView = (newView) => {
    if (view !== newView) {
      setView(newView);
      // setFilteredFlights(flights[newView]);
    }
  }

  const handleSearch = (text) => {
    setSearchText(text);
    setFilteredFlights(searchFlights(flights[view], text));
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
        setFlights({...flights, [category]: data || []});
        setFilteredFlights(data || []);
        setLastUpdate({...lastUpdate, [category]: Date.now()});
      });
  }

  const handleAutoRefresh = () => {
    clearTimeout(refreshTimer.current);
    const refreshUrl = (view === 'arrivals') ? arrivalsTestUrl : departuresTestUrl;
    
    if (updateRequired(lastUpdate[view])) {
      console.log(`Auto-loading '${view}' from ${refreshUrl}`);
      handleLoadFlights(refreshUrl, view);
    } else {
      setFilteredFlights(flights[view]);
    }

    refreshTimer.current = setTimeout(() => {
      handleAutoRefresh();
    }, defaultRefresh);
  }

  useEffect(() => {
    // Run this on app startup and everytime view changes
    handleAutoRefresh(); // automatic refresh
  }, [view, setView]);

  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <ScrollTop />
      <div className="container overflow mx-auto">
        <div className="flex w-full justify-between">
          <FlightSearchBar searchText={searchText} handleSearch={handleSearch} />
          <RefreshBtn handleLoadFlights={handleLoadFlights} view={view} lastUpdate={lastUpdate} />
        </div>
        <FlightView view={view} setView={setView} />
        <FlightSortBar sortBy={sortBy} handleSortFlights={handleSortFlights} view={view} />
        <FlightList flights={filteredFlights} view={view} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
