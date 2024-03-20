"use client";

import { useState } from 'react';
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
    <main className="flex flex-col items-center justify-between p-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <form className="mb-4">
        <label className="block mb-2">Flight Number</label>
        <input type="text" placeholder="Enter flight number" className="border border-gray-300 rounded-md px-2 py-1 mb-2" />

        <label className="block mb-2">Contact Info</label>
        <input type="text" placeholder="Enter contact info" className="border border-gray-300 rounded-md px-2 py-1 mb-2" />

        <label className="block mb-2">Time / Date</label>
        <input type="datetime-local" className="border border-gray-300 rounded-md px-2 py-1 mb-2" />

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <button onClick={changeTitle} className="btn btn-primary">Change Title</button>
      <button onClick={addRandomFlight} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">Add Random Flight</button>

      <table className="w-full mt-8">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Flight Number</th>
            <th className="border border-gray-300 px-4 py-2">Flight Time</th>
            <th className="border border-gray-300 px-4 py-2">Destination</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{flight.flightNum}</td>
              <td className="border border-gray-300 px-4 py-2">{flight.flightTime}</td>
              <td className="border border-gray-300 px-4 py-2">{flight.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}