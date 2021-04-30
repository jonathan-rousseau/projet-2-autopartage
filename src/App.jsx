import React from 'react';
import Reservation from './components/Reservation';
import Profil from './components/Profil';

import Header from './components/Header';

import Inscription from './components/Inscription';

import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header />

      <Reservation />

      <Profil />

      <Inscription />

      <Login />
    </div>
  );
}

export default App;
