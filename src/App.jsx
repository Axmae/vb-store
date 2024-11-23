import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import du composant Footer
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, Explore, Home, Preview } from "./pages/index";
import Dashboard from "./pages/admin/Dashboard"; 
import Orders from "./pages/admin/Commandes";
import Clients from './pages/admin/Clients';
import Parametres from './pages/admin/settings';
import Products from './pages/admin/Produits';
import Payment from "./pages/Payment";
const App = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#121212] min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} /> 
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />  
          <Route path="/admin/Clients" element={<Clients />} />
          <Route path="/admin/Commandes" element={<Orders />} />
          <Route path="/admin/Produits" element={<Products />} />
          <Route path="/admin/settings" element={<Parametres />} />
        </Routes>
      </div>

      <Footer /> 
    </div>
  );
};

export default App;
