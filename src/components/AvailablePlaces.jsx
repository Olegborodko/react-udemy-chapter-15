import { useState, useEffect } from 'react';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/places');
        const data = await response.json();
        console.log('data' , data);
        setAvailablePlaces(data.places)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    }

    fetchData();
  }, [])

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
