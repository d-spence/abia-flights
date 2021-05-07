// App config variables

const apiUrl = 'http://localhost:5000';

const arrivalsUrl = `${apiUrl}/arrivals`;
const departuresUrl = `${apiUrl}/departures`;

const arrivalsTestUrl = `${apiUrl}/test/arrivals`;
const departuresTestUrl = `${apiUrl}/test/departures`;

const defaultRefresh = 60000; // default time of refreshes/updates in msecs

export {
  apiUrl,
  arrivalsUrl,
  departuresUrl,
  arrivalsTestUrl,
  departuresTestUrl,
  defaultRefresh,
};