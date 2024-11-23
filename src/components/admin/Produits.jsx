import React from "react";
import { data } from "../../assets/data"; // Updated import

const ProductsPage = () => {
  const sneakers = data.sneakers; // Accessing sneakers from data
  const discountedProducts = sneakers.filter((product) => product.has_discount);
  const nonDiscountedProducts = sneakers.filter((product) => !product.has_discount);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Liste des Produits</h1>

      {/* Liste des produits sans remise */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Produits sans remise</h2>
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left text-gray-700">Nom</th>
            <th className="py-3 px-6 text-left text-gray-700">Catégorie</th>
            <th className="py-3 px-6 text-left text-gray-700">Prix (DH)</th>
            <th className="py-3 px-6 text-left text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {nonDiscountedProducts.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-4 px-6 text-gray-700">{product.name}</td>
              <td className="py-4 px-6 text-gray-700">{product.category.join(", ")}</td>
              <td className="py-4 px-6 text-gray-700">
                {product.retail_price_cents / 100} DH
              </td>
              <td className="py-4 px-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Modifier</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Liste des produits avec remise */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Produits avec remise</h2>
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left text-gray-700">Nom</th>
            <th className="py-3 px-6 text-left text-gray-700">Catégorie</th>
            <th className="py-3 px-6 text-left text-gray-700">Prix (DH)</th>
            <th className="py-3 px-6 text-left text-gray-700">Remise (%)</th>
            <th className="py-3 px-6 text-left text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {discountedProducts.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-4 px-6 text-gray-700">{product.name}</td>
              <td className="py-4 px-6 text-gray-700">{product.category.join(", ")}</td>
              <td className="py-4 px-6 text-gray-700">
                {product.retail_price_cents / 100} DH
              </td>
              <td className="py-4 px-6 text-gray-700">{product.discount || "N/A"}%</td>
              <td className="py-4 px-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Modifier</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
