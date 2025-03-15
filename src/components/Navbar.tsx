import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ocean-deep/95 backdrop-blur-sm py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="iGEM Sea Titans Logo"
                className="h-12 md:h-16 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/parts" className="nav-link">
              PARTS
            </Link>

            <div className="relative group">
              <button className="nav-link flex items-center">
                TEAM <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="py-1 rounded-md bg-ocean-light border border-sea-800/20">
                  <Link
                    to="/team"
                    className="block px-4 py-2 text-sm text-white hover:bg-sea-700/50"
                  >
                    Team Members
                  </Link>
                  <Link
                    to="/attributions"
                    className="block px-4 py-2 text-sm text-white hover:bg-sea-700/50"
                  >
                    Attributions
                  </Link>
                  <Link
                    to="/collaborations"
                    className="block px-4 py-2 text-sm text-white hover:bg-sea-700/50"
                  >
                    Collaborations
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="nav-link flex items-center">
                PROJECT <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="py-1 rounded-md bg-ocean-light border border-sea-800/20">
                  <Link
                    to="/description"
                    className="block px-4 py-2 text-sm text-white hover:bg-sea-700/50"
                  >
                    Description
                  </Link>
                  <Link
                    to="/design"
                    className="block px-4 py-2 text-sm text-white hover:bg-sea-700/50"
                  >
                    Design
                  </Link>
                  <Link
                    to="/results"
                    className="block px-4 py-2 text-sm text-white hover:bg-sea-700/50"
                  >
                    Results
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/safety" className="nav-link">
              SAFETY
            </Link>
            <Link to="/human-practices" className="nav-link">
              HUMAN PRACTICES
            </Link>

            <div className="relative group">
              <button className="nav-link flex items-center">
                AWARDS <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="py-1 rounded-md bg-ocean-light border border-sea-800/20">
                  <Link
                    to="/medals"
                    className="block px-4 py-2 text-sm text-white hover:bg-sea-700/50"
                  >
                    Medals
                  </Link>
                  <Link
                    to="/special-prizes"
                    className="block px-4 py-2 text-sm text-white hover:bg-sea-700/50"
                  >
                    Special Prizes
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-ocean-deep py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="nav-link block py-2">
              HOME
            </Link>
            <Link to="/parts" className="nav-link block py-2">
              PARTS
            </Link>
            <Link to="/team" className="nav-link block py-2">
              TEAM
            </Link>
            <Link to="/project" className="nav-link block py-2">
              PROJECT
            </Link>
            <Link to="/safety" className="nav-link block py-2">
              SAFETY
            </Link>
            <Link to="/human-practices" className="nav-link block py-2">
              HUMAN PRACTICES
            </Link>
            <Link to="/awards" className="nav-link block py-2">
              AWARDS
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
