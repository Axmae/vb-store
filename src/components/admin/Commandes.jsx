import React from 'react';

const OrdersPage = () => {
  const orders = [
    { id: 1, clientName: 'Client 1', total: '$100', status: 'Livré' },
    { id: 2, clientName: 'Client 2', total: '$200', status: 'En cours' },
    { id: 3, clientName: 'Client 3', total: '$150', status: 'Livré' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Liste des Commandes</h1>
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left text-gray-700">Client</th>
            <th className="py-3 px-6 text-left text-gray-700">Total</th>
            <th className="py-3 px-6 text-left text-gray-700">Statut</th>
            <th className="py-3 px-6 text-left text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b">
              <td className="py-4 px-6 text-gray-700">{order.clientName}</td>
              <td className="py-4 px-6 text-gray-700">{order.total}</td>
              <td className="py-4 px-6 text-gray-700">{order.status}</td>
              <td className="py-4 px-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Voir</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md">Annuler</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
