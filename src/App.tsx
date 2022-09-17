import React from 'react';
import './App.css';
import Header from './components/header';
import SmartphonesBox from './components/smartphonesBox';
import SmartphonesData from './data/smartphones.json';

function App() {
  return (
   <>
   <div className='app'>
      <Header />
      <div className='items'><SmartphonesBox devices={SmartphonesData.smartphones} /></div>
  </div>
   </>
  );
}

export default App;
