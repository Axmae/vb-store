// src/pages/admin/Dashboard.jsx
import React from 'react';
import AdminLayout from '../../components/admin/Layout';  // Assurez-vous que ce chemin est correct
import ClientsPage from '../../components/admin/Clients';  // Chemin actuel du composant Dashboard

const Clients = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tableau de Bord</h1>
        <ClientsPage />
      </div>
    </AdminLayout>
  );
};

export default Clients;
