import React, { useState } from "react";
import { data } from "../../assets/data"; // Updated import

const AdminDashboard = () => {
  const sneakers = data.sneakers; // Use the new sneakers array from data
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    grid_picture_url: "",
    category: [],
    retail_price_cents: 0,
    details: "",
    brand_name: "",
    avgRating: 0, // Placeholder as avgRating is not part of data
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produit ajouté:", newProduct);
    setIsFormOpen(false);
  };

  const handleDeleteProduct = (id) => {
    console.log("Produit supprimé:", id);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tableau de Bord Admin</h1>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold">Total des produits</p>
            <p className="text-4xl">{sneakers.length}</p>
          </div>
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold">Produits en stock</p>
            <p className="text-4xl">{sneakers.filter((p) => p.has_stock).length}</p>
          </div>
          <div className="bg-yellow-600 text-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold">Produits populaires</p>
            <p className="text-4xl">{sneakers.filter((p) => p.avgRating >= 4.5).length}</p>
          </div>
        </div>

        {/* Liste des produits */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Liste des produits</h2>
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-gray-700">Nom</th>
              <th className="py-3 px-6 text-left text-gray-700">Marque</th>
              <th className="py-3 px-6 text-left text-gray-700">Catégorie</th>
              <th className="py-3 px-6 text-left text-gray-700">Prix</th>
              <th className="py-3 px-6 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sneakers.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-4 px-6 text-gray-700">{product.name}</td>
                <td className="py-4 px-6 text-gray-700">{product.brand_name}</td>
                <td className="py-4 px-6 text-gray-700">
                  {product.category.join(", ")}
                </td>
                <td className="py-4 px-6 text-gray-700">MAD{(product.retail_price_cents / 100).toFixed(2)}</td>
                <td className="py-4 px-6">
                  <button
                    className="bg-yellow-500 text-white py-2 px-4 rounded-md mr-2"
                    onClick={() => console.log("Modifier produit", product.id)}
                  >
                    Modifier
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-md"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Formulaire pour ajouter un produit */}
        <div className="mt-6">
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md"
          >
            {isFormOpen ? "Fermer le formulaire" : "Ajouter un produit"}
          </button>
        </div>

        {isFormOpen && (
          <div className="mt-6 p-6 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-700">Nom du produit</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-700">Marque</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    value={newProduct.brand_name}
                    onChange={(e) => setNewProduct({ ...newProduct, brand_name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-700">Catégorie</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value.split(",") })}
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-700">Prix</label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    value={newProduct.retail_price_cents}
                    onChange={(e) => setNewProduct({ ...newProduct, retail_price_cents: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-700">Détails</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md"
                    value={newProduct.details}
                    onChange={(e) => setNewProduct({ ...newProduct, details: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-700">URL de l'image</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    value={newProduct.grid_picture_url}
                    onChange={(e) => setNewProduct({ ...newProduct, grid_picture_url: e.target.value })}
                  />
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md"
                  >
                    Ajouter Produit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
