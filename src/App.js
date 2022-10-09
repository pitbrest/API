import React from 'react';

// import { ApiResources } from './components/api-resurses/Api-Resurs';
import { Header } from './components/header/Header';
import { RandomPlanet } from './components/random-planet/Random-planet';
import { ItemList } from './components/item-list/Item-list';
import { PersonDetails } from './components/person-details/Person-details';
import './App.css';

function App() {
  return <>
    <Header />
    <RandomPlanet />
    <div className='content-wrapper'>
      <ItemList />
      <PersonDetails />
    </div>
  </>;
}

export default App;
