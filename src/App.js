import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/Main/HomePage';
import Reservation from './components/Main/Reservation';
import About from './components/Main/About/About';

function App() {
  const [reservation, setReservation] = useState(false);
  const [reservationTime, setReservationTime] = useState(false);
  return (
    <>
    <Router>
      <Header  />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservation" element={<Reservation reservationStateChanger={setReservation} reservationTimeStateChanger={setReservationTime} />} />
            <Route path="/about" element={<About />} />
          </Routes>

      <Footer />
    </Router>

    </>
  );
}

export default App;
