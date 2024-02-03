import React, { useState } from 'react';
import './Homepage.css';

export default function Homepage() {
  const [data, setData] = useState('');
  const [age, setAge] = useState(null);
  const today = new Date().toISOString().split('T')[0];
  const [nextBirthday, setNextBirthday] = useState(null);

  const buttonClick = () => {
    const birthDate = new Date(data);
    birthDate.setHours(0, 0, 0, 0);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    const ageInMilliseconds = currentDate - birthDate;
    const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

    const nextBirthdayDate = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthdayDate < currentDate) {
      nextBirthdayDate.setFullYear(currentDate.getFullYear() );
    }

    const timeToNextBirthday = nextBirthdayDate - currentDate;
    const days = Math.floor(timeToNextBirthday / (24 * 60 * 60 * 1000));
    setAge(years);
    setNextBirthday({
      days
    });
  }

  return (
    <div className='containerStyle'>
      <div className='Heading_align'>
        <h1>JavaScript</h1>
        <h1 style={{ color: '#ffff76' }}>Age Calculator</h1>
      </div>
      <div className='calculator'>
        <input type="date" onChange={(e) => setData(e.target.value)} max={today} />
        <button onClick={buttonClick}>Calculate</button>
      </div>
      
      {age !== null && (
        <div className='agedisplay'>
          <p>You are {age} years old.</p>
        </div>
      )}
      {nextBirthday !== null && (
        <div className='agedisplays'>
          <p>Next birthday:{nextBirthday.days} days Left</p>
        </div>
      )}
    </div>
  );
}
