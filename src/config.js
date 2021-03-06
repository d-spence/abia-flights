// App config variables

const apiUrl = 'https://austin-flights-api.herokuapp.com';
const apiTestUrl = 'http://localhost:5000';

const arrivalsUrl = `${apiUrl}/arrivals`;
const departuresUrl = `${apiUrl}/departures`;

const arrivalsTestUrl = `${apiUrl}/test/arrivals`;
const departuresTestUrl = `${apiUrl}/test/departures`;

const defaultRefresh = 300 * 1000; // default time of refreshes/updates in msecs
const minRefreshTime = 60 * 1000; // min time between manual refreshes

export {
  apiUrl,
  apiTestUrl,
  arrivalsUrl,
  departuresUrl,
  arrivalsTestUrl,
  departuresTestUrl,
  defaultRefresh,
  minRefreshTime,
};