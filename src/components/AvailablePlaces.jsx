import { useState, useEffect } from 'react';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);

        const response = await fetch('http://localhost:3000/places');
        const data = await response.json();
        console.log('data' , data);
        setAvailablePlaces(data.places);
        setIsFetching(false);
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
      isLoading={isFetching}
      loadingText="Fetching place data..."
      onSelectPlace={onSelectPlace}
    />
  );
}
