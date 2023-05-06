import HomePage from './HomePage';
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailsPage from './DetailsPage';
import { useState,useEffect } from 'react';
import './App.css';
const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <HomePage/>
/* <DetailsPage/> */
  );
}

export default App;
