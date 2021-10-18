import './App.css';
import { useState, useEffect } from 'react';
import { Route } from 'react-router';

import Header from './components/Header';
import Countries from './pages/Countries';

const App = () => {

  const [countriesData, setCountriesData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://restcountries.com/v2/all'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json()
      setCountriesData(data);
    } catch (error) {
      console.log('error!');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(countriesData);

  return (
    <div>
      <Header />
      <Route path="/" exact>
        <Countries countriesData={countriesData} />
      </Route>
    </div>
  );
}

export default App;
