import React, { useState } from 'react';

const SettingsPage = () => {
  // État pour gérer les informations du profil et les préférences
  const [profile, setProfile] = useState({
    username: 'admin',
    email: 'admin@example.com',
    password: '',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    language: 'en',
  });

  // Handler pour mettre à jour les informations du profil
  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Handler pour la gestion des notifications
  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({
      ...notifications,
      [name]: checked,
    });
  };

  // Handler pour la gestion des préférences d'affichage
  const handlePreferencesChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreferences({
      ...preferences,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Paramètres du Profil</h1>

      {/* Section Profil */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Informations du Profil</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600">Nom d'utilisateur</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-600">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Section Notifications */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
        <div className="space-y-4">
          <div>
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={notifications.emailNotifications}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              Notifications par Email
            </label>
          </div>
          <div>
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                name="smsNotifications"
                checked={notifications.smsNotifications}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              Notifications par SMS
            </label>
          </div>
        </div>
      </div>

      {/* Section Préférences */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Préférences d'Affichage</h2>
        <div className="space-y-4">
          <div>
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                name="darkMode"
                checked={preferences.darkMode}
                onChange={handlePreferencesChange}
                className="mr-2"
              />
              Mode Sombre
            </label>
          </div>
          <div>
            <label className="block text-gray-600">Langue</label>
            <select
              name="language"
              value={preferences.language}
              onChange={handlePreferencesChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="en">Anglais</option>
              <option value="fr">Français</option>
              <option value="es">Espagnol</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bouton Sauvegarder */}
      <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Sauvegarder</button>
      </div>
    </div>
  );
};

export default SettingsPage;
