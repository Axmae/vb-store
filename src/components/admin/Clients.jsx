import React from 'react';

const ClientsPage = () => {
  const clients = [
    { id: 1, name: 'Client 1', email: 'client1@example.com', orders: 5 },
    { id: 2, name: 'Client 2', email: 'client2@example.com', orders: 2 },
    { id: 3, name: 'Client 3', email: 'client3@example.com', orders: 10 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Liste des Clients</h1>
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left text-gray-700">Nom</th>
            <th className="py-3 px-6 text-left text-gray-700">Email</th>
            <th className="py-3 px-6 text-left text-gray-700">Commandes</th>
            <th className="py-3 px-6 text-left text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id} className="border-b">
              <td className="py-4 px-6 text-gray-700">{client.name}</td>
              <td className="py-4 px-6 text-gray-700">{client.email}</td>
              <td className="py-4 px-6 text-gray-700">{client.orders}</td>
              <td className="py-4 px-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Voir</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsPage;
