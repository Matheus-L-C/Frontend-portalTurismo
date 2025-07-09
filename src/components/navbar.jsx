import React, { useState, useEffect } from 'react';
import { CiInstagram } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const renderSearchForm = (extraClasses = '') => (
    <form onSubmit={handleSearch} className={`flex items-center space-x-2 ${extraClasses}`}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar..."
        className="px-4 py-2 bg-white rounded-full text-black focus:outline-none shadow-sm"
        aria-label="Buscar"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 shadow-sm"
      >
        Buscar
      </button>
    </form>
  );

  return (
    <nav className="bg-gradient-to-r from-green-600 to-blue-500 p-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">
          Nova Serra Verde
        </Link>

        {/* Barra de pesquisa (desktop) */}
        <div className="hidden md:flex">{renderSearchForm()}</div>

        {/* Botão do menu (mobile) */}
        <button onClick={toggleMenu} className="text-white md:hidden" aria-label="Abrir ou fechar menu">
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Menu dropdown (mobile + desktop) */}
      <div className={`md:flex md:items-center md:justify-between ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link to="/" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Home</Link>
          <Link to="/about" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Sobre</Link>
          <Link to="/service" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Serviços</Link>
          <Link to="/contact" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Contato</Link>
          <Link to="/location" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Localização</Link>

          {isAuthenticated ? (
            <>
              <Link to="/profile" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Perfil</Link>
              <button onClick={handleLogout} className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Sair</button>
            </>
          ) : (
            <Link to="/login" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Login</Link>
          )}
        </div>

        {/* Instagram + busca (mobile) */}
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-100 text-2xl" aria-label="Instagram">
            <CiInstagram />
          </a>

          {/* Barra de busca (mobile) */}
          <div className="md:hidden">
            {renderSearchForm()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


