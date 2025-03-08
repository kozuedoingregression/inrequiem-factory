import React from 'react'

function Driver() {
  const driverStats = {
    topSpeed: "320 km/h",
    distanceTravelled: "1,200 km",
    crewRank: 5,
    totalRaces: 25,
    wins: 15,
    losses: 10,
  };
  return (

    <div className="text-center">
      <h1 className="text-3xl font-bold">Driver's Profile</h1>
      <p className="text-gray-600 mt-2">God Speed</p>
      <div className="mt-6 grid grid-cols-2 gap-6 text-lg">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">🏎️ Top Speed</h2>
          <p className="text-5xl font-bold">{driverStats.topSpeed}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">📍 Distance Travelled</h2>
          <p className="text-4xl font-bold">{driverStats.distanceTravelled}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">🏆 Crew Rank</h2>
          <p className="text-3xl font-bold">#{driverStats.crewRank}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">🚦 Races Completed</h2>
          <p className="text-3xl font-bold">{driverStats.totalRaces}</p>
        </div>
      </div>
    </div>
  )
}

export default Driver
