import React from 'react'

function Crew() {
  const crewRanking = [
    { name: "Night Riders", rank: 1, members: 12 },
    { name: "Storm Chasers", rank: 2, members: 9 },
    { name: "Speed Demons", rank: 3, members: 7 },
    { name: "Velocity Kings", rank: 4, members: 10 },
    { name: "Shadow Racers", rank: 5, members: 8 },
  ];
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Crew</h1>
        <p className="text-gray-600 mt-2">Fast life</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">🏁 Crew Ranking</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-600 px-4 py-2">Rank</th>
                <th className="border border-gray-600 px-4 py-2">Crew Name</th>
                <th className="border border-gray-600 px-4 py-2">Members</th>
              </tr>
            </thead>
            <tbody>
              {crewRanking.map((crew, index) => (
                <tr key={index} className="text-center hover:bg-gray-800">
                  <td className="border border-gray-600 px-4 py-2">#{crew.rank}</td>
                  <td className="border border-gray-600 px-4 py-2">{crew.name}</td>
                  <td className="border border-gray-600 px-4 py-2">{crew.members}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Crew
