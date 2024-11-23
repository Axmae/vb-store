import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo et Description */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">VB.STORE</h1>
            <p className="text-sm mt-2">
              Discover the best VolleyBall products.
            </p>
          </div>

          {/* Liens de Navigation */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <a href="/" className="hover:underline">
              Accueil
            </a>
            <a href="/explore" className="hover:underline">
              Explorer
            </a>
            <a href="/cart" className="hover:underline">
              Panier
            </a>
          </div>

          {/* Réseaux Sociaux */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="https://www.instagram.com/" className="hover:text-gray-400">
              Instagram
            </a>
            <a href="https://x.com/" className="hover:text-gray-400">
              Twitter
            </a>
          </div>
        </div>

        <p className="text-sm mt-6">&copy; 2024 VB.STORE. CopyRights.</p>
      </div>
    </footer>
  );
};

export default Footer;
