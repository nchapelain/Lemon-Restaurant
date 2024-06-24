import React, { useState } from 'react';
import './Reservation.css';

function Reservation({reservationStateChanger, reservationTimeStateChanger}) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!date) {
      newErrors.date = 'Date is required';
    }

    if (!time) {
      newErrors.time = 'Time is required';
    }

    if (!guests) {
      newErrors.guests = 'Number of guests is required';
    }

    if (!occasion) {
      newErrors.occasion = 'Occasion is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      console.log('Reservation Details:', { name, date, time, guests, occasion });
      reservationStateChanger(true);
      reservationTimeStateChanger(name + date + time + guests + occasion);
    }
  };

  return (
    <main className="container">
      <h1>Reserve a table</h1>
      {isSubmitted ? (
        <p>Thank you! Your reservation has been made successfully.</p>
      ) : (
        <form onSubmit={handleSubmit} className='grid2'>
          <section>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </section>
          <section>
            <label htmlFor="res-date">Choose date</label>
            <input 
              type="date" 
              id="res-date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </section>
          <section>
            <label htmlFor="res-time">Choose time</label>
            <select 
              id="res-time" 
              value={time} 
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Select time</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
            {errors.time && <span className="error">{errors.time}</span>}
          </section>
          <section>
            <label htmlFor="guests">Number of guests</label>
            <input 
              type="number" 
              placeholder="1" 
              min="1" 
              max="10" 
              id="guests" 
              value={guests} 
              onChange={(e) => setGuests(e.target.value)} 
            />
            {errors.guests && <span className="error">{errors.guests}</span>}
          </section>
          <section>
            <label htmlFor="occasion">Occasion</label>
            <select 
              id="occasion" 
              value={occasion} 
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="">Select occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            {errors.occasion && <span className="error">{errors.occasion}</span>}
          </section>
          <p className='cta'><input type="submit" value="Make Your reservation" /></p>
        </form>
      )}
    </main>
  );
}

export default Reservation;
