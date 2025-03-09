import React, { useState } from 'react';

interface Player {
  id: string;
  name: string;
  university: string;
  category: string;
  value: string;
  image: string;
}

const initialPlayers: Player[] = [
  {
    id: 'P001',
    name: 'Virat Singh',
    university: 'Delhi University',
    category: 'Batsman',
    value: '₹ 9,500,000',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
  },
  {
    id: 'P002',
    name: 'Rahul Kumar',
    university: 'Mumbai University',
    category: 'Bowler',
    value: '₹ 8,500,000',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
  },
  {
    id: 'P003',
    name: 'Ajay Patel',
    university: 'Bangalore University',
    category: 'All-rounder',
    value: '₹ 9,000,000',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
  },
  {
    id: 'P004',
    name: 'Suresh Raina',
    university: 'Chennai University',
    category: 'Batsman',
    value: '₹ 8,000,000',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
  },
];

function Players() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (id: string) => {
    // Implement edit functionality
    console.log('Edit player:', id);
  };

  const handleDelete = (id: string) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Players Management</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search players..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Filters
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Player
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                University
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPlayers.map((player) => (
              <tr key={player.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" src={player.image} alt="" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{player.name}</div>
                      <div className="text-sm text-gray-500">{player.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{player.university}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {player.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {player.value}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => handleEdit(player.id)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(player.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {filteredPlayers.length} of {players.length} entries
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                Previous
              </button>
              <button className="px-3 py-1 border border-blue-500 bg-blue-500 text-white rounded-md text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                3
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Players;