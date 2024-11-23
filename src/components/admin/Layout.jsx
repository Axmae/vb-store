import React from 'react';
import { Link } from 'react-router-dom';  // Importation de Link depuis react-router-dom
import { Home, ShoppingBag, Menu, Users, Settings } from 'lucide-react';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-gray-900 text-white">
          <div className="flex items-center h-16 px-4 bg-gray-800 shadow-md">
            <h1 className="text-xl font-semibold">Admin Panel</h1>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto bg-gray-800">
            <nav className="flex-1 px-2 py-4 space-y-2">
              {/* Utilisation de Link au lieu de <a> */}
              <Link
                to="/admin/dashboard"
                className="flex items-center px-4 py-3 rounded-md text-white bg-gray-900 hover:bg-gray-700"
              >
                <Home className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
              <Link
                to="/admin/Produits"
                className="flex items-center px-4 py-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <ShoppingBag className="mr-3 h-5 w-5" />
                Produits
              </Link>
              <Link
                to="/admin/Commandes"
                className="flex items-center px-4 py-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Menu className="mr-3 h-5 w-5" />
                Commandes
              </Link>
              <Link
                to="/admin/Clients"
                className="flex items-center px-4 py-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Users className="mr-3 h-5 w-5" />
                Clients
              </Link>
              <Link
                to="/admin/settings"
                className="flex items-center px-4 py-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Settings className="mr-3 h-5 w-5" />
                Paramètres
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
