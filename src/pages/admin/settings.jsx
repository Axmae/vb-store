// src/pages/admin/Dashboard.jsx
import React from 'react';
import AdminLayout from '../../components/admin/Layout';  // Assurez-vous que ce chemin est correct
import SettingsPage from '../../components/admin/settings';  // Assurez-vous que le chemin est correct pour votre composant SettingsPage

const Parametres = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Paramètres</h1>
        <SettingsPage />
      </div>
    </AdminLayout>
  );
};

export default Parametres;
