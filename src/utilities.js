// Utility functions

const fetchApiData = (url) => {
  // Request data from API returned as a promise
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export {
  fetchApiData,
}