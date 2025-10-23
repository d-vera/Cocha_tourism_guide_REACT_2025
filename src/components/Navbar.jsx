import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-gray-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <img 
              src="/images/cristo-logo.png" 
              alt="cristo logo" 
              className="w-10 h-10"
            />
            <Link to="/" className="text-xl font-semibold">
              Guía-Cbba
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`hover:text-gray-300 transition ${isActive('/') ? 'font-bold' : ''}`}
            >
              Inicio
            </Link>
            <Link 
              to="/top-10-lugares" 
              className={`hover:text-gray-300 transition ${isActive('/top-10-lugares') ? 'font-bold' : ''}`}
            >
              Top 10 Lugares
            </Link>
            <Link 
              to="/contactanos" 
              className={`hover:text-gray-300 transition ${isActive('/contactanos') ? 'font-bold' : ''}`}
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              to="/"
              className={`block py-2 hover:text-gray-300 transition ${isActive('/') ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/top-10-lugares"
              className={`block py-2 hover:text-gray-300 transition ${isActive('/top-10-lugares') ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Top 10 Lugares
            </Link>
            <Link
              to="/contactanos"
              className={`block py-2 hover:text-gray-300 transition ${isActive('/contactanos') ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contáctanos
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
