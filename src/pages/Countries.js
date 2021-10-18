import React from 'react';

import Inputs from '../components/Inputs';
import CountryCards from '../components/CountryCards/CountryCards';


const Countries = (props) => {
  return (
    <main>
      <Inputs />
      <CountryCards countriesData={props.countriesData}/>
    </main>
  );
}

export default Countries;