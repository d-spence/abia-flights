// App config variables

const apiUrl = 'http://localhost:5000';

const arrivalsUrl = `${apiUrl}/arrivals`;
const departuresUrl = `${apiUrl}/departures`;

const arrivalsTestUrl = `${apiUrl}/test/arrivals`;
const departuresTestUrl = `${apiUrl}/test/departures`;

const defaultRefresh = 120 * 1000; // default time of refreshes/updates in msecs
const minRefreshTime = 15 * 1000; // min time between manual refreshes


export {
  apiUrl,
  arrivalsUrl,
  departuresUrl,
  arrivalsTestUrl,
  departuresTestUrl,
  defaultRefresh,
  minRefreshTime,
};