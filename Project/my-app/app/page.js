"use client";

import { useState } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [title, setTitle] = useState('Flight Information');
  const [flights, setFlights] = useState([
    { flightNum: 'ABC123', flightTime: '10:00 AM', destination: 'New York' },
    { flightNum: 'XYZ456', flightTime: '2:00 PM', destination: 'Los Angeles' },
    // Add more placeholder flights as needed
  ]);

  const alternateTitles = ['Flight Information', 'Flight Schedule', 'Flight Details', 'Flight Status'];

  const changeTitle = () => {
    const randomIndex = Math.floor(Math.random() * alternateTitles.length);
    setTitle(alternateTitles[randomIndex]);
  };

  const addRandomFlight = () => {
    const newFlight = {
      flightNum: Math.random().toString(36).substring(7).toUpperCase(), // Random alphanumeric flight number
      flightTime: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60)} ${Math.random() > 0.5 ? 'AM' : 'PM'}`, // Random time
      destination: 'Random Destination' // Placeholder destination
    };
    setFlights([...flights, newFlight]);
  };

  return (
    <main>
      <Image 
      src="/3L2A7490.jpg"
      width={500}
      height={300}
      priority={true}
      alt="background"
      />
    </main>
  );
}