// src/pages/admin/Dashboard.jsx
import React from 'react';
import AdminLayout from '../../components/admin/Layout';  // Assurez-vous que ce chemin est correct
import OrdersPage from '../../components/admin/Commandes';  // Chemin actuel du composant Dashboard

const Orders = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tableau de Bord</h1>
        <OrdersPage />
      </div>
    </AdminLayout>
  );
};

export default Orders;
