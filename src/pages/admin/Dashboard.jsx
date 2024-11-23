// src/pages/admin/Dashboard.jsx
import React from 'react';
import AdminLayout from '../../components/admin/Layout';  // Assurez-vous que ce chemin est correct
import AdminDashboard from '../../components/admin/Dashboard';  // Chemin actuel du composant Dashboard

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tableau de Bord</h1>
        <AdminDashboard />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
